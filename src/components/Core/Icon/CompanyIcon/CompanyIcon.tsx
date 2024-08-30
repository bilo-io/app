import imgAmazonPrimeVideoLogo from 'assets/logos/img-amazon-prime-video-logo.svg';
import imgAndroid from 'assets/logos/logo-android.svg';
import imgAndroidLogo from 'assets/logos/img-android-logo.svg';
import imgAngularIcon from 'assets/logos/img-angular-icon.svg';
import imgApple from 'assets/logos/logo-apple.svg';
import imgAppleArcadeLogo from 'assets/logos/img-apple-arcade-logo.svg';
import imgAppleIosIcon from 'assets/logos/img-apple-ios-icon.svg';
import imgAppleIosLogo from 'assets/logos/img-apple-ios-logo.svg';
import imgAppleIpad from 'assets/logos/img-apple-ipad.svg';
import imgAppleItunesIcon from 'assets/logos/img-apple-itunes-icon.svg';
import imgAppleLogo from 'assets/logos/img-apple-logo.svg';
// import imgAppleMacOS from 'assets/logos/img-apple-macos.svg';
import imgAppleMusicIcon from 'assets/logos/img-apple-music-icon.svg';
import imgAppleWatchLogo from 'assets/logos/img-apple-watch-logo.svg';
import imgDeezerIcon from 'assets/logos/img-deezer-icon.svg';
import imgDeezerLogo from 'assets/logos/img-deezer-logo.svg';
import imgDisneyplusIcon from 'assets/logos/img-disneyplus-icon.svg';
import imgFacebook from 'assets/logos/logo-facebook.svg';
import imgGithub from 'assets/logos/logo-github.svg';
import imgGodot from 'assets/logos/logo-godot.svg';
import imgGodotIcon from 'assets/logos/img-godot-icon.svg';
import imgGoogle from 'assets/logos/logo-google.svg';
import imgIOS from 'assets/logos/logo-ios.svg';
import imgInstagramIcon from 'assets/logos/img-instagram-icon.svg';
import imgInstagramLogo from 'assets/logos/instagram-logo.svg';
import imgInstagramLogo2 from 'assets/logos/img-instagram-logo-2.svg';
import imgLinuxLogo from 'assets/logos/img-linux-logo.svg';
import imgMastercardLogo from 'assets/logos/img-mastercard-logo.svg';
import imgNetflixIcon from 'assets/logos/img-netflix-icon.svg';
import imgNetflixLogo from 'assets/logos/img-netflix-logo.svg';
import imgNintendoLogo from 'assets/logos/img-nintendo-logo.svg';
import imgNintendoSwitch from 'assets/logos/logo-nintendo-switch.svg';
import imgNintendoSwitchIcon from 'assets/logos/img-nintendo-switch-icon.svg';
import imgPlaystation from 'assets/logos/logo-playstation.svg';
import imgPlaystationIcon from 'assets/logos/img-playstation-icon.svg';
import imgPlaystationLogo from 'assets/logos/img-playstation-logo.svg';
import imgPlexLogo from 'assets/logos/img-plex-logo.svg';
import imgReactLogo from 'assets/logos/img-react-logo.svg';
import imgSoundcloudIcon from 'assets/logos/img-soundcloud-icon.svg';
import imgSoundcloudLogo from 'assets/logos/img-soundcloud-logo.svg';
import imgSpotifyIcon from 'assets/logos/img-spotify-icon.svg';
import imgSpotifyLogo from 'assets/logos/img-spotify-logo.svg';
import imgSteamIcon from 'assets/logos/img-steam-icon.svg';
import imgSteamIconFlat from 'assets/logos/img-steam-icon-flat.svg';
import imgSteamLogo from 'assets/logos/img-steam-logo.svg';
import imgTwitchLogo from 'assets/logos/img-twitch-logo.svg';
import imgUnity from 'assets/logos/logo-unity.svg';
import imgUnityIcon from 'assets/logos/img-unity-icon.svg';
import imgUnityLogo from 'assets/logos/img-unity-logo.svg';
import imgUnrealEngine from 'assets/logos/logo-unrealengine.svg';
import imgUnrealIcon from 'assets/logos/img-unreal-icon.svg';
import imgUnrealLogo from 'assets/logos/img-unreal-logo.svg';
import imgVisaLogo from 'assets/logos/img-visa-logo.svg';
import imgWindows from 'assets/logos/logo-windows.svg';
import imgWindowsIcon from 'assets/logos/img-windows-icon.svg';
import imgXBox from 'assets/logos/logo-xbox.svg';
import imgXboxLogo from 'assets/logos/img-xbox-logo.svg';
import imgYoutubeIcon from 'assets/logos/img-youtube-icon.svg';
import imgYoutubeLogo from 'assets/logos/img-youtube-logo.svg';
import React from 'react';

export type CompanyIconCode =
  'amazon-prime-video-logo' |
  'android' |
  'android-logo' |
  'angular-icon' |
  'apple' |
  'apple-arcade-logo' |
  'apple-ios-icon' |
  'apple-ios-logo' |
  'apple-ipad' |
  'apple-itunes-icon' |
  'apple-logo' |
  'apple-music-icon' |
  'apple-watch-logo' |
  'deezer-icon' |
  'deezer-logo' |
  'disneyplus-icon' |
  'facebook' |
  'github' |
  'godot' |
  'godot-icon' |
  'google' |
  'ios' |
  'instagram-icon' |
  'instagram-logo' |
  'instagram-logo-2' |
  'linux-logo' |
  'mastercard' |
  'netflix-icon' |
  'netflix-logo' |
  'nintendo-logo' |
  'nintendo-switch' |
  'nintendo-switch-icon' |
  'playstation' |
  'playstation-icon' |
  'playstation-logo' |
  'plex-logo' |
  'react-logo' |
  'soundcloud-icon' |
  'soundcloud-logo' |
  'spotify-icon' |
  'spotify-logo' |
  'steam-icon-flat' |
  'steam-icon' |
  'steam-logo' |
  'twitch-logo' |
  'unity' |
  'unity-icon' |
  'unity-logo' |
  'unrealengine' |
  'unreal-icon' |
  'unreal-logo' |
  'visa' |
  'windows' |
  'windows-icon' |
  'xbox' |
  'xbox-logo' |
  'youtube-icon' |
  'youtube-logo'

export interface CompanyIconProps {
  code: CompanyIconCode | string;
  containerStyle?: React.CSSProperties;
  imgStyle?: React.CSSProperties;
  isRound?: boolean;
}

export const CompanyIcon: React.FC<CompanyIconProps> = ({
  code,
  containerStyle,
  isRound,
  imgStyle = {
    borderRadius: '50%',
    height: '2rem',
    width: '2rem',
    // marginTop: 0
  },
}) => {
  const getIcon = (code: string) => {
    switch (code) {
      case 'amazon-prime-video-logo': return imgAmazonPrimeVideoLogo;
      case 'android': return imgAndroid;
      case 'android-logo': return imgAndroidLogo;
      case 'angular-icon': return imgAngularIcon;
      case 'apple': return imgApple;
      case 'apple-arcade-logo': return imgAppleArcadeLogo;
      case 'apple-ios-icon': return imgAppleIosIcon;
      case 'apple-ios-logo': return imgAppleIosLogo;
      case 'apple-ipad': return imgAppleIpad;
      case 'apple-itunes-icon': return imgAppleItunesIcon;
      case 'apple-logo': return imgAppleLogo;
      case 'apple-music-icon': return imgAppleMusicIcon;
      case 'apple-watch-logo': return imgAppleWatchLogo;
      case 'deezer-icon': return imgDeezerIcon;
      case 'deezer-logo': return imgDeezerLogo;
      case 'disneyplus-icon': return imgDisneyplusIcon;
      case 'facebook': return imgFacebook;
      case 'github': return imgGithub;
      case 'godot': return imgGodot;
      case 'godot-icon': return imgGodotIcon;
      case 'google': return imgGoogle;
      case 'ios': return imgIOS;
      case 'instagram-icon': return imgInstagramIcon;
      case 'instagram-logo': return imgInstagramLogo;
      case 'instagram-logo-2': return imgInstagramLogo2;
      case 'linux-logo': return imgLinuxLogo;
      case 'mastercard': return imgMastercardLogo;
      case 'netflix-icon': return imgNetflixIcon;
      case 'netflix-logo': return imgNetflixLogo;
      case 'nintendo-logo': return imgNintendoLogo;
      case 'nintendo-switch': return imgNintendoSwitch;
      case 'nintendo-switch-icon': return imgNintendoSwitchIcon;
      case 'playstation': return imgPlaystation;
      case 'playstation-icon': return imgPlaystationIcon;
      case 'playstation-logo': return imgPlaystationLogo;
      case 'plex-logo': return imgPlexLogo;
      case 'react-logo': return imgReactLogo;
      case 'soundcloud-icon': return imgSoundcloudIcon;
      case 'soundcloud-logo': return imgSoundcloudLogo;
      case 'spotify-icon': return imgSpotifyIcon;
      case 'spotify-logo': return imgSpotifyLogo;
      case 'steam-icon-flat': return imgSteamIconFlat;
      case 'steam-icon': return imgSteamIcon;
      case 'steam-logo': return imgSteamLogo;
      case 'twitch-logo': return imgTwitchLogo;
      case 'unity': return imgUnity;
      case 'unity-icon': return imgUnityIcon;
      case 'unity-logo': return imgUnityLogo;
      case 'unrealengine': return imgUnrealEngine;
      case 'unreal-icon': return imgUnrealIcon;
      case 'unreal-logo': return imgUnrealLogo;
      case 'visa': return imgVisaLogo;
      case 'windows': return imgWindows;
      case 'windows-icon': return imgWindowsIcon;
      case 'xbox': return imgXBox;
      case 'xbox-logo': return imgXboxLogo;
      case 'youtube-icon': return imgYoutubeIcon;
      case 'youtube-logo': return imgYoutubeLogo;
      default: return '';
    }
  };

  return (
    <div style={containerStyle}>
      <img src={getIcon(code?.toLowerCase())} alt={code} style={{
        ...imgStyle,
        ...(isRound ? {} : { borderRadius: 0 }),
      }} />
    </div>
  );
};
