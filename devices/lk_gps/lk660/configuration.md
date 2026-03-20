---
slug: /lk_gps/lk660/configuration
id: lk660-configuration
sidebar_label: Configuration
title: LK-GPS - LK660 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for LK660 GPS tracker integration with the Plaspy platform
keywords:
  - LK GPS LK660 configuration
  - LK660 setup Plaspy
  - LK660 server configuration
  - LK660 GPS tracker setup
  - Plaspy LK660 integration
  - LK GPS tracker configuration
  - GPS tracker Plaspy setup
  - LK660 tracking platform setup
  - personal tracker configuration
  - GPS device server settings
---

# LK-GPS - LK660 Configuration

This page describes the public configuration context for using the LK660 with Plaspy. It summarizes the practical server settings and the common steps required to point an LK660 tracker at Plaspy so the device can report location and event data into the platform. The content here is based on the LK660 capability set as a compact personal GPS tracker using GPS and LBS positioning with 2G cellular connectivity.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and the vendor configuration tools you use. Use this guide to prepare and validate LK660 connectivity to Plaspy, and always confirm device specific steps with the official LK GPS documentation or vendor instructions.

## Configuration Overview

This configuration process prepares the LK660 to send its location and event telemetry to Plaspy so the device becomes visible in your Plaspy account for live monitoring and historical playback. The main goal is to ensure the device is using Plaspy server settings, the correct transport, and a working mobile data connection so telemetry reaches the platform reliably.

- Set the tracker to report to the Plaspy server endpoint and port so telemetry is routed to your account.
- Configure transport and protocol options on the LK660 if the device requires a choice between UDP and TCP.
- Validate mobile network connectivity and APN or SIM settings so the device can reach Plaspy over the cellular data network.
- Apply and save settings, restart the device if required, and confirm the device appears in Plaspy.
- Troubleshoot reporting and message delivery with manufacturer tools or SMS configuration if available.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

Use either the server domain d.plaspy.com or the server IP 54.85.159.138 when entering server details in the LK660 configuration interface. All Plaspy devices use port 8888 and the platform can auto detect the device protocol regardless of whether UDP or TCP is used.

## Typical Requirements Before Setup

- A charged LK660 device with functional battery and power connection.
- An active 2G compatible SIM card with a data plan and correct APN for the operator in your region.
- Access to the official LK-GPS configuration method such as the manufacturer app, SMS commands, or desktop configuration tool.
- Coverage on the required cellular bands for the device so the tracker can establish a data session.
- A Plaspy account and access to the Plaspy platform to verify that the device appears and reports correctly.
- Basic knowledge of the device firmware and available configuration methods for your region or vendor variant.

## How This Tracker Connects to Plaspy

When properly configured, the LK660 opens a data connection over the cellular network and sends periodic position fixes and event messages to the Plaspy server endpoint and port. Plaspy ingests the telemetry and displays the device on live maps, triggers alerts, and stores historical routes for later review.

- The tracker is configured to report to d.plaspy.com or 54.85.159.138 on port 8888.
- Telemetry and event packets are sent over either UDP or TCP depending on the tracker configuration.
- Plaspy automatically detects the LK660 protocol so the platform can parse location and event messages correctly.
- Events such as SOS, fall detection, and geo fence alerts are delivered to Plaspy for notification and reporting.
- Successful connection and reporting are validated by observing the device in Plaspy and checking recent message timestamps.

## Common Configuration Workflow

1. Access the official LK-GPS configuration method or software provided for the LK660, such as the manufacturer app, desktop tool, or SMS command set.
2. In the server or reporting settings, enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the remote server port to 8888 as required by Plaspy.
4. Choose UDP or TCP as the transport if the device requires a transport selection.
5. Enter any required APN or SIM related settings so the device can establish cellular data connectivity.
6. Apply or save the configuration and restart the device if the tool or firmware requires a reboot for changes to take effect.
7. Validate that the device reports to Plaspy by checking the device status and recent telemetry in your Plaspy account.

## Example Configuration Commands

The LK660 supports configuration via manufacturer tools and SMS command sets depending on firmware and regional variants. Because model specific commands and syntax can change between firmware versions, the exact commands are not included here. In practice you will use one of the following approaches provided by LK GPS:

- Manufacturer mobile app or desktop configuration utility to enter server domain or IP and port.
- SMS parameter commands to set server, port, APN, and transport if your firmware supports SMS setup.
- USB or serial configuration tool if provided by the vendor.

When using any configuration tool, enter d.plaspy.com or 54.85.159.138 as the server and set the port to 8888. Choose UDP or TCP according to the tool's options and your network preference. Refer to the LK-GPS documentation or vendor-provided command reference for the exact SMS command syntax and order required by your device firmware.

## Configuration Notes

- Firmware differences and regional hardware variants can change the exact configuration steps and command syntax. Check the firmware version before applying commands.
- If your setup uses SMS configuration, ensure SMS commands follow the manufacturer format and that the SIM has SMS capability enabled.
- Choosing UDP versus TCP can affect how messages are delivered and retransmission behavior. Use the transport option available in the LK660 tool and remember Plaspy detects the protocol automatically.
- All Plaspy devices use port 8888 so you do not need a different port per device; use the same port across devices when configuring multiple trackers.
- If you encounter connection issues, verify APN settings, mobile network signal, and that your SIM plan includes data connectivity on 2G where required.

## Why Use Plaspy with This Configuration

Configuring the LK660 to report to Plaspy gives organizations and caregivers reliable visibility into the location and status of protected individuals or assets. With continuous updates, event reporting for SOS and falls, geo fence alerts, and historical route playback, the combination of the LK660 hardware and Plaspy platform supports situational awareness and timely responses without complex server setup.

To learn more about Plaspy and how it works with compatible trackers, visit https://www.plaspy.com. For the most current device specific setup details, firmware notes, and exact SMS or configuration commands consult the official LK GPS documentation at https://www.lk-gps.com.
