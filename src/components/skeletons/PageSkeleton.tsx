import { Breadcrumb, Col, Divider, Flex, Row } from 'antd';
import styles from './PageSkeleton.module.css';
import Title from 'antd/es/typography/Title';
import type { ItemType } from 'antd/es/breadcrumb/Breadcrumb';
import type { ComponentType, PropsWithChildren } from 'react';

/* - - - STATIC ELEMENTS - - - */
interface Props {
  breadcrumbItems: ItemType[];
  icon: ComponentType<{ className?: string }>;
  title: string;
}

const PageSkeleton = ({
  breadcrumbItems,
  children,
  icon: Icon,
  title,
}: PropsWithChildren<Props>) => {
  /* - - - DESTRUCTING - - - */

  /* - - - STATE VARIABLES - - - */

  /* - - - VARIABLES - - - */

  /* - - - FUNCTIONS - - - */

  /* - - - USE EFFECTS - - - */

  /* - - - RETURN - - - */
  return (
    <Flex
      className={styles['flex-container'] ?? ''}
      vertical
    >
      <Row>
        <Col span={20}>
          <Breadcrumb
            className={styles['breadcrumb'] ?? ''}
            items={breadcrumbItems}
          />
          <Title level={2}>{title}</Title>
        </Col>
        <Col
          className={styles['icon-container'] ?? ''}
          span={4}
        >
          <Icon className={styles['icon'] ?? ''} />
        </Col>
      </Row>

      <Divider className={styles['divider'] ?? ''} />
      {children}
    </Flex>
  );
};

export default PageSkeleton;
