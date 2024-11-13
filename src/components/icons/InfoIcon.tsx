// src/components/icons/InfoIcon.tsx
import { Icon, IconProps } from "@chakra-ui/react";

const InfoIcon = (props: IconProps) => (
  <Icon viewBox="0 0 32 44" {...props}>
    <path
      d="M3.55556 0C1.23496 0 0 2.08875 0 3.8166L0 39.9299C0 42.9796 3.48207 45.136 6.36681 43.3541L15.7179 37.5773C15.8009 37.523 15.8993 37.4939 16 37.4939C16.1007 37.4939 16.1991 37.523 16.2821 37.5773L25.6332 43.3541C28.5179 45.136 32 42.9819 32 39.9299V3.8166C32 2.08875 30.765 0 28.4444 0L3.55556 0Z"
      fill="#414141"
    />
    <path
      d="M10.1 6.204C10.412 6.204 10.628 6.264 10.748 6.384C10.868 6.496 10.928 6.704 10.928 7.008V9.888C10.928 10.192 10.868 10.404 10.748 10.524C10.628 10.636 10.412 10.692 10.1 10.692H6.908C6.596 10.692 6.38 10.636 6.26 10.524C6.14 10.404 6.08 10.192 6.08 9.888V7.008C6.08 6.704 6.14 6.496 6.26 6.384C6.38 6.264 6.596 6.204 6.908 6.204H10.1ZM7.172 6.936C7.02 6.936 6.944 7.012 6.944 7.164V9.732C6.944 9.876 7.02 9.948 7.172 9.948H9.848C10 9.948 10.076 9.876 10.076 9.732V7.164C10.076 7.012 10 6.936 9.848 6.936H7.172ZM14 5.712C14.112 5.712 14.212 5.74 14.3 5.796C14.388 5.852 14.432 5.944 14.432 6.072V10.968C14.432 11.096 14.388 11.188 14.3 11.244C14.212 11.3 14.112 11.328 14 11.328C13.888 11.328 13.788 11.3 13.7 11.244C13.612 11.188 13.568 11.096 13.568 10.968V9.78H11.84C11.736 9.78 11.66 9.744 11.612 9.672C11.572 9.6 11.552 9.512 11.552 9.408C11.552 9.312 11.572 9.228 11.612 9.156C11.66 9.084 11.736 9.048 11.84 9.048H13.568V7.956H11.84C11.736 7.956 11.66 7.92 11.612 7.848C11.572 7.776 11.552 7.688 11.552 7.584C11.552 7.488 11.572 7.404 11.612 7.332C11.66 7.26 11.736 7.224 11.84 7.224H13.568V6.072C13.568 5.944 13.612 5.852 13.7 5.796C13.788 5.74 13.888 5.712 14 5.712ZM13.604 11.928C13.916 11.928 14.132 11.988 14.252 12.108C14.372 12.22 14.432 12.428 14.432 12.732V13.836C14.432 14.14 14.372 14.352 14.252 14.472C14.132 14.584 13.916 14.64 13.604 14.64H8.684C8.604 14.64 8.544 14.656 8.504 14.688C8.472 14.712 8.456 14.768 8.456 14.856V15.708C8.456 15.86 8.532 15.936 8.684 15.936H14.432C14.528 15.936 14.6 15.972 14.648 16.044C14.696 16.116 14.72 16.2 14.72 16.296C14.72 16.392 14.696 16.476 14.648 16.548C14.6 16.62 14.528 16.656 14.432 16.656H8.432C8.12 16.656 7.904 16.596 7.784 16.476C7.664 16.364 7.604 16.156 7.604 15.852V14.736C7.604 14.432 7.664 14.224 7.784 14.112C7.904 13.992 8.12 13.932 8.432 13.932H13.352C13.44 13.932 13.5 13.92 13.532 13.896C13.564 13.864 13.58 13.804 13.58 13.716V12.864C13.58 12.72 13.504 12.648 13.352 12.648H7.868C7.772 12.648 7.7 12.612 7.652 12.54C7.604 12.468 7.58 12.384 7.58 12.288C7.58 12.192 7.604 12.108 7.652 12.036C7.7 11.964 7.772 11.928 7.868 11.928H13.604ZM24.8259 6.156C24.9219 6.156 24.9939 6.192 25.0419 6.264C25.0899 6.336 25.1139 6.424 25.1139 6.528C25.1139 6.632 25.0899 6.72 25.0419 6.792C24.9939 6.864 24.9219 6.9 24.8259 6.9H21.8259V7.176C21.8259 7.464 21.9059 7.712 22.0659 7.92C22.2339 8.128 22.5419 8.328 22.9899 8.52C23.4219 8.696 23.8179 8.856 24.1779 9C24.5379 9.136 24.8899 9.268 25.2339 9.396C25.3459 9.436 25.4179 9.508 25.4499 9.612C25.4819 9.708 25.4779 9.8 25.4379 9.888C25.3979 9.984 25.3379 10.056 25.2579 10.104C25.1779 10.152 25.0779 10.156 24.9579 10.116C24.6219 9.996 24.2739 9.868 23.9139 9.732C23.5619 9.588 23.1859 9.432 22.7859 9.264C22.5379 9.168 22.3299 9.072 22.1619 8.976C22.0019 8.88 21.8659 8.792 21.7539 8.712C21.6499 8.624 21.5699 8.54 21.5139 8.46C21.4579 8.372 21.4179 8.292 21.3939 8.22H21.3819C21.3419 8.38 21.2219 8.548 21.0219 8.724C20.8219 8.892 20.4779 9.076 19.9899 9.276C19.5819 9.444 19.2019 9.6 18.8499 9.744C18.4979 9.88 18.1539 10.008 17.8179 10.128C17.6979 10.168 17.5939 10.164 17.5059 10.116C17.4259 10.068 17.3659 9.996 17.3259 9.9C17.2859 9.812 17.2819 9.716 17.3139 9.612C17.3459 9.508 17.4179 9.436 17.5299 9.396C17.8739 9.268 18.2259 9.136 18.5859 9C18.9459 8.856 19.3419 8.696 19.7739 8.52C20.2219 8.328 20.5259 8.128 20.6859 7.92C20.8539 7.712 20.9379 7.464 20.9379 7.176V6.9H17.9379C17.8419 6.9 17.7699 6.864 17.7219 6.792C17.6739 6.72 17.6499 6.632 17.6499 6.528C17.6499 6.424 17.6739 6.336 17.7219 6.264C17.7699 6.192 17.8419 6.156 17.9379 6.156H24.8259ZM21.3819 9.636C21.4939 9.636 21.5939 9.664 21.6819 9.72C21.7699 9.776 21.8139 9.868 21.8139 9.996V11.184H26.0859C26.1899 11.184 26.2659 11.22 26.3139 11.292C26.3619 11.364 26.3859 11.452 26.3859 11.556C26.3859 11.66 26.3619 11.748 26.3139 11.82C26.2659 11.892 26.1899 11.928 26.0859 11.928H16.6779C16.5739 11.928 16.4979 11.892 16.4499 11.82C16.4019 11.748 16.3779 11.66 16.3779 11.556C16.3779 11.452 16.4019 11.364 16.4499 11.292C16.4979 11.22 16.5739 11.184 16.6779 11.184H20.9499V9.996C20.9499 9.868 20.9939 9.776 21.0819 9.72C21.1699 9.664 21.2699 9.636 21.3819 9.636ZM21.3819 12.876C22.5259 12.876 23.4059 13.04 24.0219 13.368C24.6459 13.688 24.9579 14.188 24.9579 14.868C24.9579 15.548 24.6459 16.048 24.0219 16.368C23.4059 16.696 22.5259 16.86 21.3819 16.86C20.2379 16.86 19.3539 16.696 18.7299 16.368C18.1139 16.048 17.8059 15.548 17.8059 14.868C17.8059 14.188 18.1139 13.688 18.7299 13.368C19.3539 13.04 20.2379 12.876 21.3819 12.876ZM21.3819 13.584C20.4619 13.584 19.7819 13.696 19.3419 13.92C18.9019 14.136 18.6819 14.452 18.6819 14.868C18.6819 15.284 18.9019 15.6 19.3419 15.816C19.7819 16.04 20.4619 16.152 21.3819 16.152C22.3019 16.152 22.9819 16.04 23.4219 15.816C23.8619 15.6 24.0819 15.284 24.0819 14.868C24.0819 14.452 23.8619 14.136 23.4219 13.92C22.9819 13.696 22.3019 13.584 21.3819 13.584ZM13.688 20.108C13.792 20.108 13.868 20.144 13.916 20.216C13.964 20.288 13.988 20.372 13.988 20.468C13.988 20.572 13.964 20.66 13.916 20.732C13.868 20.804 13.792 20.84 13.688 20.84H8.012C7.86 20.84 7.784 20.916 7.784 21.068V22.808C7.784 22.96 7.86 23.036 8.012 23.036H13.808C13.912 23.036 13.988 23.072 14.036 23.144C14.084 23.216 14.108 23.3 14.108 23.396C14.108 23.5 14.084 23.588 14.036 23.66C13.988 23.732 13.912 23.768 13.808 23.768H7.736C7.424 23.768 7.208 23.712 7.088 23.6C6.968 23.48 6.908 23.268 6.908 22.964V20.912C6.908 20.608 6.968 20.4 7.088 20.288C7.208 20.168 7.424 20.108 7.736 20.108H13.688ZM15.164 25.028C15.268 25.028 15.344 25.064 15.392 25.136C15.44 25.208 15.464 25.296 15.464 25.4C15.464 25.512 15.44 25.604 15.392 25.676C15.344 25.748 15.268 25.784 15.164 25.784H5.756C5.652 25.784 5.576 25.748 5.528 25.676C5.48 25.604 5.456 25.512 5.456 25.4C5.456 25.296 5.48 25.208 5.528 25.136C5.576 25.064 5.652 25.028 5.756 25.028H15.164ZM10.46 26.876C11.604 26.876 12.484 27.04 13.1 27.368C13.724 27.688 14.036 28.188 14.036 28.868C14.036 29.548 13.724 30.048 13.1 30.368C12.484 30.696 11.604 30.86 10.46 30.86C9.316 30.86 8.432 30.696 7.808 30.368C7.192 30.048 6.884 29.548 6.884 28.868C6.884 28.188 7.192 27.688 7.808 27.368C8.432 27.04 9.316 26.876 10.46 26.876ZM10.46 27.584C9.54 27.584 8.86 27.696 8.42 27.92C7.98 28.136 7.76 28.452 7.76 28.868C7.76 29.284 7.98 29.6 8.42 29.816C8.86 30.04 9.54 30.152 10.46 30.152C11.38 30.152 12.06 30.04 12.5 29.816C12.94 29.6 13.16 29.284 13.16 28.868C13.16 28.452 12.94 28.136 12.5 27.92C12.06 27.696 11.38 27.584 10.46 27.584ZM24.0099 20.18C24.3219 20.18 24.5379 20.24 24.6579 20.36C24.7779 20.472 24.8379 20.68 24.8379 20.984V21.632C24.8379 22.192 24.7939 22.74 24.7059 23.276C24.6179 23.804 24.5059 24.256 24.3699 24.632L23.5779 24.452C23.8419 23.588 23.9739 22.668 23.9739 21.692V21.152C23.9739 21.008 23.8979 20.936 23.7459 20.936H18.0099C17.9059 20.936 17.8299 20.9 17.7819 20.828C17.7339 20.756 17.7099 20.664 17.7099 20.552C17.7099 20.448 17.7339 20.36 17.7819 20.288C17.8299 20.216 17.9059 20.18 18.0099 20.18H24.0099ZM26.0739 24.224C26.1859 24.224 26.2659 24.26 26.3139 24.332C26.3619 24.404 26.3859 24.496 26.3859 24.608C26.3859 24.712 26.3619 24.8 26.3139 24.872C26.2659 24.944 26.1859 24.98 26.0739 24.98H16.6899C16.5779 24.98 16.4979 24.944 16.4499 24.872C16.4019 24.8 16.3779 24.712 16.3779 24.608C16.3779 24.496 16.4019 24.404 16.4499 24.332C16.4979 24.26 16.5779 24.224 16.6899 24.224H26.0739ZM18.2259 26.336C18.3379 26.336 18.4379 26.364 18.5259 26.42C18.6139 26.476 18.6579 26.564 18.6579 26.684V27.812H24.1059V26.684C24.1059 26.564 24.1459 26.476 24.2259 26.42C24.3139 26.364 24.4139 26.336 24.5259 26.336C24.6379 26.336 24.7379 26.364 24.8259 26.42C24.9139 26.476 24.9579 26.564 24.9579 26.684V29.816C24.9579 30.12 24.8979 30.328 24.7779 30.44C24.6579 30.56 24.4419 30.62 24.1299 30.62H18.6339C18.3219 30.62 18.1059 30.56 17.9859 30.44C17.8659 30.328 17.8059 30.12 17.8059 29.816V26.684C17.8059 26.564 17.8459 26.476 17.9259 26.42C18.0139 26.364 18.1139 26.336 18.2259 26.336ZM18.6579 29.708C18.6579 29.836 18.7259 29.9 18.8619 29.9H23.9019C24.0379 29.9 24.1059 29.836 24.1059 29.708V28.532H18.6579V29.708Z"
      fill="white"
    />
  </Icon>
);

export default InfoIcon;
