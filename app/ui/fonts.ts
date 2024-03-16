// https://fonts.google.com/knowledge/glossary/subsetting
// 애플리케이션에 맞춤 Google 글꼴을 추가하여 이것이 어떻게 작동하는지 살펴보겠습니다.
// 이 파일을 사용하여 애플리케이션 전체에서 사용될 글꼴을 유지하게 됩니다.

// Inter 모듈의 글꼴을 가져온다. 이것이 기본 글꼴이 됩니다.
import { Inter } from 'next/font/google';
import { Mako } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const mako = Mako({ weight: ['400'], subsets: ['latin']});
