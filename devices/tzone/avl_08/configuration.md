---
slug: /tzone/avl_08/configuration
id: avl_08-configuration
sidebar_label: Configuration
title: TZone - AVL-08 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TZone AVL-08 with Plaspy server settings and SMS commands for initial setup
keywords:
  - TZone AVL-08 configuration
  - AVL-08 setup Plaspy
  - TZone GPS tracker configuration
  - AVL-08 server configuration
  - AVL-08 SMS commands
  - AVL-08 GPRS setup
  - Plaspy tracker integration
  - vehicle tracking configuration
  - fleet management tracker setup
  - GPS tracker platform setup
---

# TZone - AVL-08 Configuration

This page covers the public configuration context for using the TZone AVL-08 GPS tracker with Plaspy. It focuses on the practical server settings, setup workflow, and publicly available SMS configuration commands that will allow the device to report location and status to the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so this page presents practical, public information while encouraging verification with official manufacturer documentation where appropriate.

## Configuration Overview

The goal of configuring an AVL-08 for Plaspy is to prepare the tracker to send GPRS location data to the Plaspy endpoint, confirm connectivity, and ensure the device appears and reports correctly in the Plaspy platform.

- Set the mobile operator APN so the tracker can use GPRS data to reach the internet.
- Configure the device to report to the Plaspy server endpoint and port.
- Set an appropriate update interval for position reporting and telemetry.
- Activate GPRS reporting mode so the tracker sends data rather than relying only on SMS.
- Validate the tracker is visible and reporting correctly in Plaspy after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (the device may be configured using UDP or TCP on port 8888)
- Plaspy automatically detects the tracker protocol and all devices use the same port on the platform

## Typical Requirements Before Setup

- A powered and accessible AVL-08 device with a working SIM card that has data and SMS capability as required by the installation.
- The mobile network APN, username, and password from your SIM operator to configure GPRS access.
- Access to the TZone official configuration method for the AVL-08 such as SMS commands or vendor tools.
- Basic credentials or SMS password required for sending configuration commands to the tracker.
- A Plaspy account or access to your Plaspy workspace to confirm the device appears and reports after setup.
- Optional: a stable environment to test connectivity and verify position updates.

## How This Tracker Connects to Plaspy

When configured, the AVL-08 sends GPRS data to the Plaspy shared server endpoint and port so the platform can process location and event data. Plaspy receives the tracker data and uses automatic protocol detection to decode and display device telemetry.

- The tracker is pointed to the Plaspy server by IP or domain name.
- Device data is sent over GPRS to the Plaspy server on port 8888.
- Transport can be UDP or TCP depending on device settings and installer preference.
- Plaspy automatically detects the tracker protocol so installers need only configure the server endpoint and transport.
- The platform then provides visibility, event reporting, and operational monitoring for the tracker.

## Common Configuration Workflow

1. Access the official TZone configuration method for the AVL-08, typically SMS commands or vendor software.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the server port to 8888 as required by Plaspy.
4. Choose UDP or TCP transport if the device prompts for a transport selection.
5. Configure the operator APN and any optional APN credentials so the tracker can use GPRS.
6. Apply or save the configuration and restart the device if the tracker or vendor tool requires a restart.
7. Validate that the device reports to Plaspy and appears in your Plaspy workspace with expected position updates.

## Example Configuration Commands

The AVL-08 supports SMS-based configuration. Send these commands by SMS to the device in the order shown for initial setup. The examples include a default SMS password included in the command string as shown by the manufacturer format. Replace placeholders with your operator values.

- Set the operator APN
  - Command format (APN required, username and password optional):
  ```
  *000000,011,{{apn}},{{apnu}},{{apnp}}#
  ```
  - If your APN does not require username or password, send:
  ```
  *000000,011,{{apn}}#
  ```
  - Explanation: {{apn}} is your mobile operator APN. {{apnu}} and {{apnp}} are optional APN username and password placeholders.

- Set the update interval to 60 seconds
  ```
  *000000,018,60,999#
  ```
  - Explanation: This configures the report interval. Adjust the 60 value as needed according to your reporting policy.

- Set the GPRS server to Plaspy
  ```
  *000000,015,0,54.85.159.138,8888#
  ```
  - Explanation: This points the device to the Plaspy server IP and port. You may alternatively use the domain d.plaspy.com in vendor tools that accept DNS names.

- Activate the GPRS mode
  ```
  *000000,016,1#
  ```
  - Explanation: Enables GPRS reporting mode so the device sends data to the configured server.

Note: The SMS commands shown use the numeric SMS password sequence as part of the command format. If your device SMS password is different, replace the initial numeric password accordingly.

## Configuration Notes

- SMS command formats and parameter order can vary between firmware versions and regional device revisions; verify command syntax with the current TZone documentation.
- The AVL-08 supports SMS-based setup as shown, but some installers prefer vendor tools for bulk configuration or firmware-specific settings.
- Choose UDP or TCP based on network reliability and your operational preference; Plaspy accepts either transport and will detect the protocol automatically.
- Use the server IP 54.85.159.138 or the domain d.plaspy.com when configuring the device; both point to the Plaspy endpoint on port 8888.
- Keep APN credentials and sensitive passwords secure during setup and change SMS passwords from defaults where supported.

## Why Use Plaspy with This Configuration

Configuring the TZone AVL-08 to report to Plaspy gives organizations consistent visibility into vehicle and asset location, alarms, and operational status using a single shared server endpoint. For fleets or asset managers who need consolidated monitoring and alarm handling, pointing devices to the Plaspy server and using the platform's automatic protocol detection simplifies onboarding multiple device models.

To learn more about Plaspy and how it supports a wide range of trackers, visit https://www.plaspy.com. For the most current AVL-08 device details, firmware notes, and manufacturer instructions verify setup methods and commands on the official TZone website http://www.tzonedigital.com/
