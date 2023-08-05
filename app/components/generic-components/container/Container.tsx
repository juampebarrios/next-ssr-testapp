'use client';
import './Container.scss';

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  children
}) => {
    return (
        <div
          className="container row"
        >
          {children}
        </div>
    );
}

export default Container;