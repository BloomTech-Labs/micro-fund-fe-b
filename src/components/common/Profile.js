import React, { useState } from 'react';
import styled from 'styled-components';
import {
  PageHeader,
  Menu,
  Dropdown,
  Button,
  Tag,
  Typography,
  Row,
  Collapse,
} from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

// Styles
const ProfileStyle = styled.div`
  box-shadow: 2px 2px 2px grey;
  margin: 10px;
  padding: 10px;
  background: #fafafa;
`;

const { Panel } = Collapse;
const { Paragraph } = Typography;

//dummy data - will be replacing with actual API data once back-end is set up.
const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

//dummy data - will be replacing with actual API data once back-end is set up.
const DropdownMenu = () => (
  <Dropdown key="more" overlay={menu}>
    <Button
      style={{
        border: 'none',
        padding: 0,
      }}
    >
      <EllipsisOutlined
        style={{
          fontSize: 20,
          verticalAlign: 'top',
        }}
      />
    </Button>
  </Dropdown>
);

//dummy data - will be replacing with actual API data once back-end is set up.
const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
];

const IconLink = ({ src, text }) => (
  <a>
    <img src={src} alt={text} />
    {text}
  </a>
);

//dummy data - will be replacing with actual API data once back-end is set up.
const content = (
  <>
    <Paragraph>
      {' '}
      <p>userInput_id</p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
      eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
      bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis
      tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti
      sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia
      quis posuere ut, pulvinar vitae dolor.
    </Paragraph>

    <div>
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
        text="email_id"
      />
      <p></p>
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
        text="company_id"
      />
    </div>
  </>
);

const Content = ({ children, extraContent }) => (
  <Row>
    <div style={{ flex: 1 }}>{children}</div>
    <div className="image">{extraContent}</div>
  </Row>
);

function callback(key) {
  console.log(key);
}

function Profile() {
  return (
    <ProfileStyle>
      <h4>user_id profile</h4>
      <Collapse ghost="true" onChange={callback}>
        <Panel>
          <PageHeader
            title="org_name"
            className="site-page-header"
            subTitle="org_id"
            tags={<Tag color="blue">Actively Funding</Tag>}
            extra={[
              <Button key="1" type="primary">
                Edit
              </Button>,
              <Button key="2" type="primary">
                Save
              </Button>,
              <DropdownMenu key="more" />,
            ]}
            avatar={{
              src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4',
            }}
            breadcrumb={{ routes }}
          >
            <Content
              extraContent={
                <img
                  src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"
                  alt="content"
                  width="100%"
                />
              }
            >
              {content}
            </Content>
          </PageHeader>
          ,
        </Panel>
      </Collapse>
    </ProfileStyle>
  );
}

export default Profile;
