import { createAsyncThunk } from '@reduxjs/toolkit'

const fetchUrl = 'https://fakestoreapi.com/products'

export const fetchShop = createAsyncThunk(
    'shop/fetchShop',
    async (_, { rejectWithValue }) => {
        try {
          const response = await fetch(fetchUrl + '?limit=5')
          if (!response.ok) {
            throw new Error('Error fetching.')
          }
          const data = await response.json()
          return data
        } catch (error) {
          return rejectWithValue(error.message)
        }
      }
    )


