import React from 'react';

import Card from '../card';
import NavigationItem from '../navigation-item';

import MediaIcon from '../../icons/media';
import MusicIcon from '../../icons/music';
import PlayCircleIcon from '../../icons/play-circle';
import PresentationIcon from '../../icons/presentation';
import SettingsIcon from '../../icons/settings';

import * as S from './styles';

const Navigation = () => (
  <S.Navigation>
    <Card small>
      <S.List>
        <S.ListItem>
          <NavigationItem to="/app/musics">
            <MusicIcon />
          </NavigationItem>
        </S.ListItem>
        <S.ListItem>
          <NavigationItem to="/app/playlists">
            <PlayCircleIcon />
          </NavigationItem>
        </S.ListItem>
        <S.ListItem>
          <NavigationItem to="/app/presentation">
            <PresentationIcon />
          </NavigationItem>
        </S.ListItem>
        <S.ListItem>
          <NavigationItem to="/app/media">
            <MediaIcon />
          </NavigationItem>
        </S.ListItem>
        <S.ListItem>
          <NavigationItem to="/app/settings">
            <SettingsIcon />
          </NavigationItem>
        </S.ListItem>
      </S.List>
    </Card>
  </S.Navigation>
);

export default Navigation;
