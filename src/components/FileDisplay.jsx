import React, { useRef, useEffect } from 'react'

export default function FileDisplay(props) {
    const { handleAudioReset, file, audioStream, handleFormSubmission } = props
    const audioRef = useRef()

    useEffect(() => {
        if (!file && !audioStream) { return }
        if (file) {
            console.log('HERE FILE', file)
            audioRef.current.src = URL.createObjectURL(file)
        } else {
            console.log('HERE AUDIO', audioStream)
            audioRef.current.src = URL.createObjectURL(audioStream)
        }
    }, [audioStream, file])

    return (
        <main className='flex flex-col items-center justify-center p-6 gap-6 text-center sm:gap-8 w-full max-w-2xl mx-auto'>
            <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl text-gray-800'>
                Your <span className='text-blue-500'>File</span>
            </h1>
            <div className='w-full text-left mb-6'>
                <h3 className='font-semibold text-lg text-gray-700'>File Name</h3>
                <p className='truncate text-gray-600'>{file ? file?.name : 'Custom audio'}</p>
            </div>
            <div className='w-full'>
                <audio ref={audioRef} className='w-full rounded-lg shadow-lg' controls>
                    Your browser does not support the audio element.
                </audio>
            </div>
            <div className='flex items-center justify-between w-full gap-4'>
                <button onClick={handleAudioReset} className='text-gray-500 hover:text-blue-500 transition duration-300 ease-in-out'>
                    Reset
                </button>
                <button onClick={handleFormSubmission} className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out flex items-center gap-2'>
                    <p>Transcribe</p>
                    <i className="fa-solid fa-pen-nib"></i>
                </button>
            </div>
        </main>
    )
}
