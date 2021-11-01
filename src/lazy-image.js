import React from 'react'
import LazyLoad from 'vanilla-lazyload'
import lazyloadConfig from './config/lazyload'

if(!document.lazyLoadInstance) {
    document.lazyLoadInstance = new LazyLoad(lazyloadConfig)
}

export class LazyImage extends React.Component {
    componentDidMount() {
        document.lazyLoadInstance.update()
    }

    componentDidUpdate() {
        document.lazyLoadInstance.update()
    }

    render() {
        const { alt, src, srcset, sizes, width, height } = this.props;
        return(
            <img
                alt={alt}
                className="lazy w-full h-full object-cover"
                data-src={src}
                data-srcset={srcset}
                data-sizes={sizes}
                width={width}
                height={height}
            />
        )
    }
}

export default LazyImage