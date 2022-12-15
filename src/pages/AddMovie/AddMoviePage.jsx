import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useHttp from '../../hooks/useHttp'
import styles from './addMoviePage.module.scss'

const AddMoviePage = () => {
  const { sendRequest: sendGenresRequest } = useHttp()
  const { sendRequest: sendAddMovieRequest } = useHttp()
  const [genres, setGenres] = useState([])
  const refForm = useRef()
  const navigate = useNavigate();

  useEffect(() => {
    sendGenresRequest(
      {
        url: 'http://movies/getGenres.php',
      },
      (data) => {
        setGenres(data)
      }
    )
  }, [])

  const addMovieHandler = (event) => {
    event.preventDefault()

    const form = new FormData()

    form.append('name', refForm.current.name.value)
    form.append('year', refForm.current.year.value)
    form.append('producer', refForm.current.producer.value)
    form.append('duration', refForm.current.duration.value)
    form.append('description', refForm.current.description.value)
    form.append('upfile', refForm.current.upfile.files[0])
    form.append('upfile2', refForm.current.upfile2.files[0])

    const checkboxes = []

    for (let i = 0; i < genres.length; i++) {
      const checkbox = refForm.current[`genre${i}`]

      if (checkbox.checked) {
        checkboxes.push(checkbox.value)
      }
    }

    form.append('genres', checkboxes)

    sendAddMovieRequest(
      {
        url: 'http://movies/addMovie.php',
        method: 'POST',
        body: form,
      },
      (data) => {
        navigate('/')
      }
    )
  }

  return (
    <form onSubmit={(event) => addMovieHandler(event)} ref={refForm}>
      <input type='text' className='' name='name' placeholder='Название' />
      <input type='number' className='' name='year' placeholder='Год' />
      <input type='text' className='' name='producer' placeholder='Режиссер' />
      <input
        type='number'
        className=''
        name='duration'
        placeholder='Длительность'
      />
      <textarea
        type='text'
        className=''
        name='description'
        placeholder='Описание'
      />
      <input type='file' className='' name='upfile' />
      <input type='file' className='' name='upfile2' />
      <div className=''>
        {genres?.map((genre, index) => (
          <div key={genre[0]}>
            <label>
              <input
                type='checkbox'
                value={genre[0]}
                name={`genre${index}`}
                className='chb'
              />
              {genre[1]}
            </label>
          </div>
        ))}
      </div>
      <button>Добавить фильм</button>
    </form>
  )
}

export default AddMoviePage
