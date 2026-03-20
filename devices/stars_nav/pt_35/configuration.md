---
slug: /stars_nav/pt_35/configuration
id: pt_35-configuration
sidebar_label: Configuration
title: Stars Nav - PT-35 Configuration
sidebar_class_name: menu_item_tracker
description: Practical configuration guide for Stars Nav PT-35 to connect with Plaspy including server settings transport options and setup checklist
keywords:
  - Stars Nav PT-35
  - PT-35 configuration
  - Stars Nav PT-35 setup
  - PT-35 Plaspy configuration
  - PT-35 GPS tracker setup
  - Plaspy tracker configuration
  - vehicle tracking PT-35
  - personal tracker PT-35
  - PT-35 server configuration
  - GPS platform setup
---

# Stars Nav - PT-35 Configuration

This page covers the public configuration context for using the Stars Nav PT-35 personal tracker with Plaspy. It explains the shared Plaspy server settings and practical steps you can follow on the manufacturer side to point the PT-35 at the Plaspy platform for real time tracking, alerts, and historical reporting. The guidance below is based on the PT-35 feature set which includes u‑blox GNSS positioning, quad band GSM modem support for GPRS and SMS, buffered message storage, and configurable power and I O behavior.

Plaspy uses shared server settings across supported devices and automatically detects tracker protocols, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The PT-35 supports GPRS TCP IP and SMS transport so you can configure it to send position and event data to Plaspy using the common Plaspy endpoint and port while following Stars Nav configuration methods such as USB to serial tools or SMS command interfaces.

## Configuration Overview

This configuration process prepares the PT-35 to communicate with Plaspy so location and event telemetry are received reliably in your Plaspy account. You will point the tracker to Plaspy server values, confirm transport and APN settings for your SIM, and validate that the device reports after a restart or configuration apply.

- Configure the PT-35 to deliver GPRS TCP IP or SMS reports to Plaspy
- Ensure the device APN and SIM data are correct so the unit can access the mobile network
- Set the Plaspy server endpoint and the shared port so the device can reach the platform
- Validate live reporting and buffered message upload to confirm end to end visibility in Plaspy
- Test alarm, panic, and motion reporting to ensure event telemetry routes to Plaspy

## Plaspy Server Settings

Use the following public server settings when configuring the PT-35 for Plaspy:

- Plaspy server domain d.plaspy.com
- Plaspy server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when devices report

Note that Plaspy uses the same port for all supported devices so you can consistently use port 8888 for PT-35 reporting. Choose UDP or TCP on the device if the tracker requires an explicit transport selection.

## Typical Requirements Before Setup

- A powered PT-35 with an active SIM card that has data enabled for GPRS use or SMS capability if you plan SMS reporting
- Access to the official Stars Nav configuration method such as USB to serial tools, the vendor configuration utility, or the supported SMS command set
- Correct APN settings and any SIM credentials necessary for the device to establish a GPRS connection
- Physical access to the device to apply wiring for panic inputs or external sensors if you need I O telemetry
- A charged battery or constant power source for firmware changes and connectivity tests
- Network coverage at the installation location to allow immediate verification of reporting to Plaspy

## How This Tracker Connects to Plaspy

The PT-35 sends GNSS positions and event telemetry to Plaspy using its GSM data and messaging capabilities. When configured, the tracker reports to the shared Plaspy server endpoint and port so data is visible in Plaspy for live maps, alerts, and historical playback.

- Use GPRS TCP IP to forward live position and telemetry packets to d.plaspy.com on port 8888
- Optionally send status or emergency reports by SMS to Plaspy where supported by the deployment
- Buffered messages stored on the PT-35 are uploaded to the Plaspy endpoint once network access is restored
- Motion, panic, and digital input events are forwarded to Plaspy to trigger alerts and notifications
- Plaspy automatically detects the tracker protocol so the platform can interpret incoming data without per device protocol selection

## Common Configuration Workflow

1. Access the official Stars Nav configuration method or software for the PT-35, such as the USB to serial interface or the vendor SMS command set.
2. Enter the Plaspy server address either as d.plaspy.com or as the server IP 54.85.159.138 in the device server field.
3. Set the device port to 8888 which is the shared Plaspy port for all devices.
4. If the device requires a transport selection, choose UDP or TCP to match your deployment needs.
5. Configure APN and SIM parameters as required by your mobile operator so GPRS connectivity is available.
6. Apply or save the configuration and restart the device if the method or firmware requires a reboot to apply changes.
7. Validate that the device reports to Plaspy by checking for incoming position updates or events on the platform; verify buffered message upload after network reconnection if applicable.

## Example Configuration Commands

The PT-35 can be configured by Stars Nav tools or by SMS commands depending on firmware and vendor provisioning. Exact public commands and the syntax used by Stars Nav are manufacturer provided and can vary by firmware version. Because specific commands are published by the manufacturer, consult the official Stars Nav configuration guide or the device manual for the precise SMS strings or USB configuration steps to set server, port, APN, and transport options. Common manufacturer methods include:

- USB to serial configuration using the Stars Nav configuration utility
- SMS command strings to set server and APN values when supported by firmware

Refer to Stars Nav documentation for command examples and exact syntax for your device firmware.

## Configuration Notes

- Firmware differences and hardware revisions can change command syntax and configuration workflows; always confirm your device firmware level before applying instructions.
- Choose UDP or TCP based on your network reliability and expected message behavior; UDP is common for low overhead reporting while TCP can be used for guaranteed delivery scenarios if supported.
- Verify APN, username, and password settings for the SIM card so GPRS connections establish reliably with the mobile operator.
- Because Plaspy uses the same port for all devices and performs automatic protocol detection, you only need to set the shared server address and port on the device.
- If using SMS for provisioning or reporting, check whether the Stars Nav firmware supports the specific SMS feature set you intend to use.

## Why Use Plaspy with This Configuration

Using the Stars Nav PT-35 with Plaspy provides a straightforward path to centralized location visibility, event monitoring, and historical reporting for personal safety, asset protection, and small vehicle monitoring. The PT-35’s low power modes, buffered message storage, and flexible I O make it well suited to deployments that require discreet installation and reliable reporting to a single Plaspy endpoint.

To learn more about Plaspy and how it integrates with devices like the PT-35 visit https://www.plaspy.com. Device specific configuration methods and firmware behavior can change over time so verify the latest setup details with Stars Nav at http://www.starsnav.com/ before finalizing a production deployment.
