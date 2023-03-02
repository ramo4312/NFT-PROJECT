import React from 'react'
import MainRoutes from './MainRoutes'
import Navbar from './components/Navbar'
import Cursor from './components/Cursor'
import AuthContextProvider from './contexts/AuthContextProvider'
import PostContextProvider, { usePosts } from './contexts/PostContextProvider'
import BasketContextProvider from './contexts/BasketContextProvider'
import FavoriteContextProvider from './contexts/FavoriteContext'
import PostComments from './components/posts/PostComments'

const view = window.innerWidth

const App = () => {
	return (
		<FavoriteContextProvider>
			<BasketContextProvider>
				<AuthContextProvider>
					<PostContextProvider>
						{view > 800 ? <Cursor /> : null}
						<Navbar />
						<MainRoutes />
					</PostContextProvider>
				</AuthContextProvider>
			</BasketContextProvider>
		</FavoriteContextProvider>
	)
}

export default App
