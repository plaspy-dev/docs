---
slug: /eelink/tk119/configuration
id: tk119-configuration
sidebar_label: Configuration
title: EElink - TK119 Configuration
sidebar_class_name: menu_item_tracker
description: Configure an EElink TK119 tracker for use with Plaspy with server setup SMS commands and verification instructions
keywords:
  - EElink TK119 configuration
  - EElink TK119 setup
  - TK119 Plaspy server configuration
  - TK119 GPS tracker configuration
  - TK119 tracking setup
  - EElink tracker setup
  - TK119 GPS platform setup
  - vehicle tracking TK119
  - TK119 server settings
  - TK119 SMS configuration
---

# EElink - TK119 Configuration

This page describes the public configuration context for using the EElink TK119 with Plaspy. It focuses on the practical steps and public settings needed to point the tracker to Plaspy servers, verify connectivity, and make the device visible in the Plaspy platform. Where applicable, SMS commands shown are the official public examples used to configure the device.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol so you do not need to set a protocol identifier on the platform side. Exact manufacturer side setup steps can vary with firmware, hardware revision, installation type, and vendor tools. The TK119 supports remote configuration by SMS and server reporting which is reflected in the example commands below.

## Configuration Overview

The goal of this configuration process is to prepare the TK119 so it reliably communicates with Plaspy and reports regular position and status updates. Use the shared Plaspy endpoint and port and validate the device reports before deploying the tracker in production.

- Configure the tracker APN so it can use mobile data for reporting
- Point the tracker to the Plaspy server endpoint using the public server domain or IP and port 8888
- Choose the transport type on the tracker if required by the device tool or SMS interface
- Set a reporting interval so Plaspy receives periodic updates for tracking and monitoring
- Verify settings and connectivity using the device parameter query command and confirm visibility on Plaspy

## Plaspy Server Settings

Use these public Plaspy connection settings when configuring the TK119.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on the device configuration option
- Plaspy automatically detects the tracker protocol so no manual protocol selection is required in Plaspy

## Typical Requirements Before Setup

- A powered TK119 with SIM card installed and mobile data enabled
- APN settings for the mobile operator including any username or password if required
- Access to the TK119 configuration method supported by your unit such as SMS commands or the manufacturer tool
- A way to send and receive SMS messages from the device during setup if you use SMS configuration
- Access to your Plaspy account to confirm the device appears and reports after configuration

## How This Tracker Connects to Plaspy

When configured, the TK119 will send its location and status updates to the shared Plaspy server endpoint and port where Plaspy will parse the tracker protocol automatically. Reporting can be periodic or event driven depending on tracker settings and the commands you apply.

- The tracker connects to d.plaspy.com or the IP 54.85.159.138 on port 8888
- The tracker sends periodic reports at the configured TIMER interval for visibility in Plaspy
- Plaspy accepts connections over UDP or TCP and will detect the protocol the device uses
- Device parameters can be checked remotely using the PARAM command to confirm configuration
- Successful connection and data parsing in Plaspy make the device visible in the Plaspy dashboard

## Common Configuration Workflow

1. Access the official EElink configuration method for your TK119 unit such as the SMS commands or manufacturer configuration tool.
2. Enter the Plaspy server endpoint either as the domain d.plaspy.com or the IP 54.85.159.138.
3. Set the port to 8888 on the tracker configuration.
4. Choose UDP or TCP if the device requires a transport selection when setting the server.
5. Configure the operator APN and any APN user or password values required by the SIM.
6. Apply or save the configuration and restart the tracker if the device or tool requires a reboot.
7. Validate the tracker reports to Plaspy and confirm visibility in your Plaspy account.

## Example Configuration Commands

The TK119 supports SMS based configuration. The following public commands are provided in the manufacturer guidance. Send these commands to the device by SMS in the order shown when order matters. Label a factory reset as optional or for initial setup.

- Optional factory reset to restore default settings
```
FACTORY#
```

- Set the time zone to UTC 0
```
GMT,E,0#
```

- Set the operator APN
```
APN,[apn][,[apnu],[apnp]]#
```
Explanation: Replace [apn] with the operator APN. If your operator requires an APN username and password include [apnu] and [apnp] respectively. Square brackets indicate the username and password are optional depending on your operator.

- Set the GPRS server to the Plaspy domain and port using server index 1
```
SERVER,1,d.plaspy.com,8888#
```

- Alternatively set the GPRS server to the Plaspy IP and port using server index 0
```
SERVER,0,54.85.159.138,8888#
```

- Set the update interval to every 60 seconds
```
TIMER,60#
```

- Check current parameter settings
```
PARAM#
```

Use PARAM# to verify that the APN, server, timer, and other parameters were applied correctly. Do not remove the trailing hash character when sending SMS commands unless your management tool requires a different delimiter.

## Configuration Notes

- Firmware and hardware revisions can change command syntax or available options. Always confirm the exact command format for your device firmware.
- The TK119 supports SMS configuration as shown, but many deployments use a manufacturer tool for bulk or remote management. Follow the method that matches your installation.
- When a device requires a transport selection choose UDP or TCP based on the device interface. Plaspy accepts both and will detect the protocol automatically.
- Keep APN credentials correct and compatible with the SIM to ensure GPRS sessions can open to the Plaspy endpoint.
- Test configuration with the PARAM# command and verify the device appears in Plaspy before final installation.

## Why Use Plaspy with This Configuration

Configuring the EElink TK119 to report to Plaspy gives organizations centralized visibility and operational monitoring for vehicles and assets. Using Plaspy server settings lets the tracker report position and status updates to a single shared endpoint where Plaspy automatically detects the tracker protocol and makes the device data available in the platform.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific instructions firmware notes and official command references check the manufacturer website https://www.eelink.com.cn/ since device behavior and setup methods can change over time.
