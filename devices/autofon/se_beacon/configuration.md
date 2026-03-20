---
slug: /autofon/se_beacon/configuration
id: se_beacon-configuration
sidebar_label: Configuration
title: AutoFon - SE+ Beacon Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for AutoFon SE+ Beacon with Plaspy server settings and practical setup steps for GPRS and SMS reporting
keywords:
  - AutoFon SE+ Beacon configuration
  - AutoFon SE+ Beacon setup
  - AutoFon SE+ Beacon Plaspy
  - AutoFon SE+ Beacon server configuration
  - SE+ Beacon GPS tracker configuration
  - SE+ Beacon GPRS setup
  - AutoFon tracker Plaspy compatibility
  - vehicle tracking SE+ Beacon
  - asset tracking SE+ Beacon
  - Plaspy tracker configuration
---

# AutoFon - SE+ Beacon Configuration

This page covers the public configuration context for using the AutoFon SE+ Beacon tracker with Plaspy. It summarizes the practical server settings and common setup steps to prepare the SE+ Beacon for reporting location and event telemetry to the Plaspy platform. The content is based on the SE+ Beacon public description and focuses on the Plaspy-specific values you will need to enter when configuring the device.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, so the same Plaspy endpoint and port are used for all compatible trackers. Exact manufacturer side steps can vary depending on firmware version, hardware revision, installation type, and the vendor configuration tools provided by AutoFon. Always compare these public guidance notes with the official device documentation for the firmware you have installed.

## Configuration Overview

This configuration process prepares the SE+ Beacon to deliver GNSS positions and event alerts into Plaspy by pointing the device to Plaspy's unified server endpoint and ensuring the device can establish a GPRS connection for real time reporting with SMS as a configured fallback.

- Enter the Plaspy server details so the SE+ Beacon can send GPRS packets to Plaspy for live tracking and event reporting.
- Choose the transport method (UDP or TCP) if the device requires a transport selection during setup.
- Configure and confirm heartbeat or life signal intervals so the device maintains presence in Plaspy dashboards.
- Validate that SMS fallback and owner number settings are correct for alerting when data is unavailable.
- Test connectivity and confirm that telemetry and events are visible in Plaspy after the device reports.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: supports UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when packets arrive to the shared endpoint

Note: Plaspy uses the same port for all supported devices and performs automatic protocol detection so the server endpoint and port are consistent across compatible trackers.

## Typical Requirements Before Setup

- Power and battery: ensure the SE+ Beacon has adequate battery charge or external power connected for configuration and testing.
- Active SIM card with a data plan and GPRS enabled for real time reporting, and SMS service available for fallback alerts.
- Device identifier available such as the IMEI to register and identify the tracker in your Plaspy account or inventory.
- Access to the official AutoFon configuration method or software for your device firmware version.
- Network coverage at the test location to allow GPRS registration and initial packet delivery.
- Optional: a PC, USB adapter, or an AutoFon configuration tool if the device requires cable or software based setup.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the SE+ Beacon sends GNSS position and event telemetry to the shared Plaspy server endpoint and port over GPRS, while SMS can be used as a backup channel for alerts or fallback reporting. The device buffer and heartbeat behavior help preserve and forward data when connectivity is restored.

- Primary data path is GPRS to the Plaspy server at d.plaspy.com or 54.85.159.138 using port 8888.
- Transport may be UDP or TCP depending on the device configuration; choose the transport supported by your firmware.
- Plaspy automatically detects the tracker protocol when packets arrive at the shared port so manual protocol selection in the platform is not required.
- Event reporting such as motion, tilt, impact, and SOS is forwarded to Plaspy for alerts and dashboard visualization.
- Heartbeat or life signal messages keep the device visible in Plaspy and help detect offline conditions.
- The device black box buffer stores unsent packets for later upload to Plaspy after connectivity resumes.

## Common Configuration Workflow

1. Access the official AutoFon configuration method or software recommended for the SE+ Beacon and for the firmware version installed.
2. Locate the server or APN configuration section and enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the port to 8888, since Plaspy uses the same port for all supported devices.
4. Choose the transport protocol UDP or TCP if the device requires a transport selection during configuration.
5. Configure heartbeat or life signal intervals and confirm owner number or SMS fallback settings as needed.
6. Apply or save the configuration on the device using the manufacturer tool or SMS commands provided by AutoFon.
7. Restart the device if required by the firmware to apply new network settings.
8. Validate connectivity by confirming the device reports to Plaspy and by checking for position and event messages on the Plaspy platform.

## Example Configuration Commands

The exact commands and the method used to configure the SE+ Beacon depend on the AutoFon firmware and the manufacturer tools. AutoFon devices commonly provide configuration via a PC tool, USB adapter, or SMS configuration strings. Because models and firmware differ, follow the manufacturer instructions for the correct command syntax and the order of operations. In all cases, the Plaspy values to use are d.plaspy.com or 54.85.159.138 and port 8888 with UDP or TCP selected if required.

If you have manufacturer provided SMS commands or a configuration script from AutoFon, apply them in the order the manufacturer specifies and replace server host and port fields with the Plaspy settings above.

## Configuration Notes

- Firmware differences may change available menu names and the exact location of server fields in the AutoFon configuration tool.
- If the device offers both UDP and TCP, test the transport option that performs best with your mobile operator and network conditions; Plaspy supports either.
- Use SMS fallback settings for critical alerts when possible; SMS can provide simple notification when GPRS is unavailable.
- Confirm APN settings are correct for the SIM card in use before attempting to send GPRS packets to Plaspy.
- Keep manufacturer documentation at hand for model specific SMS commands, reset procedures, and firmware update instructions.

## Why Use Plaspy with This Configuration

Configuring the AutoFon SE+ Beacon to report to Plaspy gives organizations dependable visibility of covert or long duration asset tracking deployments. The SE+ Beacon's GPRS primary path and SMS fallback, combined with configurable heartbeat messages and a large offline buffer, help ensure position and event data reach Plaspy for live monitoring, historical playback, and alerting workflows.

To learn more about how Plaspy supports fleet and asset tracking with unified server settings, visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and installation guidance for the AutoFon SE+ Beacon refer to the official manufacturer documentation at https://www.autofon.ru/ since device behavior and configuration procedures can change over time.
