import { useLocation } from "react-router-dom"
import { setPage } from "../features/goodsSlice"
import { useEffect } from "react"

export const usePageFromSearchParams = (dispatch) => {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const pageUrl = searchParams.get("page")

    useEffect(() => {
        dispatch(setPage(+pageUrl))
    }, [dispatch, pageUrl])
    return pageUrl;
    
}