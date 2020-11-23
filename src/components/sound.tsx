import React from 'react';

class Sound extends React.Component<{url: any},{} > {

    audio: HTMLAudioElement;

    constructor(props: any)
    {
        super(props);
        this.audio = new Audio(this.props.url);
        console.log(this.audio.src);
    }
  
    componentDidMount() {
      this.audio.play();
    }

    componentWillUnmount()
    {
        if (!this.audio.paused)
        {
            this.audio.pause();
        }
    }
  
    render() {
      return (
        <div>
        </div>
      );
    }
  }
  
  export { Sound };