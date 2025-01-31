import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #111;
`;

export const Header = styled.View`
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #444;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #eee;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #eee;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;

export const Bio = styled.Text`
  font-size: 14px;
  line-height: 18px;
  color: #aaa;
  margin-top: 5px;
  text-align: center;
`;

export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Starred = styled.View`
  background: #222;
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 15px;
  flex-direction: row;
  align-items: center;
`;

export const OnwerAvatar = styled.Image`
  height: 42px;
  width: 42px;
  border-radius: 21px;
  background: #555;
`;

export const Info = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 15px;
  font-weight: bold;
  color: #aaa;
`;

export const Author = styled.Text`
  font-size: 13px;
  color: #555;
  margin-top: 2px;
`;
