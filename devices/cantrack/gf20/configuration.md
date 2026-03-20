---
slug: /cantrack/gf20/configuration
id: gf20-configuration
sidebar_label: Configuration
title: CanTrack - GF20 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the CanTrack GF20 showing Plaspy server settings and practical setup steps for platform connectivity
keywords:
  - CanTrack GF20 configuration
  - CanTrack GF20 setup
  - GF20 Plaspy integration
  - CanTrack GPS tracker configuration
  - GF20 server configuration
  - GF20 platform setup
  - CanTrack tracker setup guide
  - GF20 GPS tracker instructions
  - vehicle tracking GF20
  - asset tracking GF20
---

# CanTrack - GF20 Configuration

This page describes the public configuration context for using the CanTrack GF20 mini magnet GPS tracker with Plaspy. It focuses on the practical, nonproprietary settings you need to point the tracker at the Plaspy server and validate connectivity so the device can be visible and managed on the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol once the device reports to the platform. Exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor configuration tools, so this page explains the common server settings and workflow while encouraging verification in the official CanTrack documentation.

## Configuration Overview

The goal of configuration is to prepare the GF20 to send location and event data to Plaspy so the device appears in the platform and can be monitored. This includes entering the correct server endpoint, selecting the transport if required by the device, and verifying successful reports in Plaspy.

- Configure the tracker to report to the Plaspy server endpoint so location data reaches the platform.
- Choose UDP or TCP transport on the device if the firmware requires an explicit selection.
- Set the shared Plaspy port so the tracker uses the platform standard and is automatically recognized.
- Validate that reports arrive in Plaspy and confirm visibility in the platform.
- Use manufacturer tools or SMS commands as provided by CanTrack to apply the settings.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port

These values are the public server settings to use when pointing a tracker at Plaspy. Enter either the domain d.plaspy.com or the IP 54.85.159.138 and set the port to 8888. Choose UDP or TCP if the device requires a transport selection. Plaspy will detect the incoming protocol automatically.

## Typical Requirements Before Setup

- A charged GF20 unit with sufficient battery or connected power for initial configuration.
- A valid active SIM in the device if SMS or cellular reporting is required by the tracker.
- Access to the official CanTrack configuration method such as SMS configuration commands or the vendor software for the GF20.
- A Plaspy account or platform access where you can verify device reports and tracking visibility.
- Ability to receive SMS responses from the device if you will use SMS commands for configuration.
- Basic knowledge of the device working modes and how to switch modes on the GF20 as described by the manufacturer.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the GF20 sends its position and event data to the shared Plaspy server endpoint and port so that the platform can process and display tracking information. Plaspy then interprets the protocol automatically and makes the device visible in the account associated with that device or SIM.

- The tracker submits location reports to d.plaspy.com or 54.85.159.138 using port 8888.
- Reports can be sent over either UDP or TCP depending on the device configuration.
- Plaspy automatically detects the tracker protocol and maps incoming messages to the correct device.
- Event reports such as geo fence triggers, low battery, or vibration alerts are delivered to Plaspy when the device sends them.
- Platform visibility and live tracking appear after the device successfully transmits to the shared Plaspy endpoint.

## Common Configuration Workflow

1. Access the official CanTrack GF20 configuration method or software as provided by the manufacturer, typically via SMS commands or vendor configuration utility.
2. Enter the Plaspy server address by specifying d.plaspy.com or the server IP 54.85.159.138 in the tracker settings.
3. Set the server port to 8888 in the device configuration.
4. If the device requires a transport selection, choose UDP or TCP as appropriate for your setup.
5. Apply or save the configuration changes through the manufacturer tool or by sending the SMS command to the device.
6. Restart or power cycle the GF20 if required by the device firmware to apply new network settings.
7. Validate that the device reports to Plaspy by checking device visibility and last reported time within your Plaspy account.

## Example Configuration Commands

The exact SMS commands or configuration strings for the GF20 depend on CanTrack firmware and the vendor toolset. Because manufacturer command sets vary, consult the CanTrack GF20 manual for the exact syntax used for setting server, port, and transport. Typical manufacturer flows allow server and port to be set via SMS or the vendor app, but command formats differ by firmware.

If you have the official CanTrack command set available, use the manufacturer provided commands to set:
- server host to d.plaspy.com or 54.85.159.138
- server port to 8888
- transport to UDP or TCP if required

Refer to the CanTrack GF20 user manual for the exact SMS or software commands and the allowed placeholders for APN or credentials if those steps are needed.

## Configuration Notes

- Firmware and hardware revisions can change command syntax and available settings; always check the GF20 manual for the current instructions.
- Some installers prefer SMS based configuration while others use vendor software; follow the method provided with your device.
- Choosing UDP versus TCP can affect behavior under poor network conditions; select the transport that matches your operational needs and test behavior with Plaspy.
- Plaspy uses the same port for all supported devices so setting port 8888 is required for proper automatic detection.
- If the GF20 stores data when GSM is lost, verify how stored records are uploaded after signal restoration according to manufacturer documentation.

## Why Use Plaspy with This Configuration

Configuring the CanTrack GF20 to point to Plaspy provides a simple way to centralize location, event, and alarm reporting for asset monitoring or short term vehicle tracking. Plaspy’s shared server endpoint and automatic protocol detection reduce per device configuration complexity and let you focus on deployment and operational monitoring.

To learn more about Plaspy visit https://www.plaspy.com and review the latest CanTrack GF20 setup and command references at https://www.cantrackgps.com/ so you can confirm device specific configuration methods and firmware behavior before deployment.
