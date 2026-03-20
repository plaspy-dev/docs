---
slug: /thinkrace/traxbean_palm/configuration
id: traxbean_palm-configuration
sidebar_label: Configuration
title: ThinkRace - Traxbean Palm Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configure the ThinkRace Traxbean Palm for use with Plaspy shared server settings and connectivity verification
keywords:
  - ThinkRace Traxbean Palm configuration
  - ThinkRace Traxbean Palm setup
  - Traxbean Palm Plaspy integration
  - Traxbean Palm server configuration
  - Traxbean Palm GPS setup
  - Traxbean Palm tracking software
  - Plaspy device configuration
  - handheld GPS tracker setup
  - Traxbean Palm SOS setup
  - Traxbean Palm telemetry configuration
---

# ThinkRace - Traxbean Palm Configuration

This page documents the public configuration context for using the ThinkRace Traxbean Palm with Plaspy. It focuses on the Plaspy server settings and the practical steps required to point the Palm at Plaspy so position, SOS and event data are received by the platform. This guidance uses publicly available Plaspy connection details and the Traxbean Palm description as its primary grounding.

Plaspy uses shared server settings for supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary depending on firmware version, hardware revision, installation type, and the ThinkRace configuration tools or vendor workflows. Use this page to prepare the Palm for Plaspy and to understand the minimal server values you will need to enter in the ThinkRace configuration method you use.

## Configuration Overview

Configuring the Traxbean Palm for Plaspy is primarily about telling the device where to send telemetry and ensuring the device has reliable cellular or network connectivity. Once the Palm is pointed to the Plaspy endpoint and connectivity is validated, the device will stream location fixes, SOS events, and other supported telemetry into Plaspy for monitoring, alerts, and historical tracking.

- Provide the Palm with a working cellular connection and correct APN if required so it can reach the internet.
- Enter the Plaspy server as the device reporting endpoint and set the shared port used by Plaspy.
- Choose the transport type the device firmware requires, UDP or TCP, and save the changes.
- Validate connectivity by confirming the device reports to Plaspy and that location and SOS events appear in the platform.
- Keep firmware and vendor configuration instructions on hand because steps can vary by firmware and vendor tools.

## Plaspy Server Settings

- Server domain d.plaspy.com for device reporting and telemetry ingestion
- Server IP 54.85.159.138 as an alternative endpoint for troubleshooting or vendor tools
- Port 8888 used by Plaspy for all supported devices
- Transport support for UDP or TCP depending on the device configuration option
- Plaspy automatically detects the tracker protocol so the same port and server values apply across devices

## Typical Requirements Before Setup

- A charged Traxbean Palm with power available for initial configuration and testing
- An active SIM card and data plan capable of sending device telemetry over 4G LTE where required
- Knowledge of the network APN settings used by the SIM carrier if the device requires manual APN configuration
- Access to the official ThinkRace configuration method or vendor tool you will use to set server and transport settings
- Device IMEI or other identifier handy for registering or verifying the device in Plaspy if required by your account workflow
- Adequate cellular or Wi Fi coverage at the device test location to validate reporting

## How This Tracker Connects to Plaspy

The Traxbean Palm sends location and event data over its cellular data link to the Plaspy server endpoint and port. Plaspy ingests GPS fixes, assisted location signals, SOS events, and other telemetry so that operations teams can monitor location, receive incident alerts, and access any visual context captured by the device camera.

- The Palm is configured to report to the shared Plaspy endpoint d.plaspy.com or to 54.85.159.138
- All devices connect using port 8888 which is the standard Plaspy port for supported trackers
- The device uses UDP or TCP transport depending on the configuration you select on the device
- Plaspy automatically detects the tracker protocol and processes incoming telemetry
- Once reporting is active, SOS events and location updates appear in Plaspy for monitoring and response workflows

## Common Configuration Workflow

1. Access the official ThinkRace configuration method or software provided with the Traxbean Palm, for example the vendor web tool, mobile app, or SMS command method used by your distributor.
2. Ensure the device has an active SIM and that APN settings are set if the firmware requires manual APN entry.
3. In the server or reporting settings, enter the Plaspy server as either d.plaspy.com or as the alternative endpoint 54.85.159.138.
4. Set the device port to 8888 which Plaspy uses for all supported devices.
5. Choose UDP or TCP transport if the device firmware asks you to select a protocol.
6. Apply or save the configuration within the ThinkRace tool and follow any device specific prompts to push the settings to the Palm.
7. Restart the device if the vendor instructions require a restart for new settings to take effect.
8. Validate that the device reports to Plaspy by checking for incoming GPS fixes, an initial heartbeat, or an SOS test event in your Plaspy view.

## Example Configuration Commands

No public device specific commands are provided in this guide. Exact command formats and the configuration method depend on the ThinkRace tool or firmware version you use. In practice you will use the official ThinkRace configuration interface or vendor supplied instructions to set the server to d.plaspy.com or 54.85.159.138 and to set port 8888 with UDP or TCP as required. If your vendor provides SMS commands or a local configuration utility, follow those exact vendor commands to apply the server and port values.

## Configuration Notes

- Firmware differences can change how server, port, and transport are entered; always reference the ThinkRace tool or firmware release notes for exact steps.
- Choose UDP or TCP based on the device option; Plaspy will accept either and will automatically detect the tracker protocol after the device connects.
- Plaspy uses the same port 8888 for all supported devices which simplifies bulk configuration and vendor provisioning.
- Ensure APN and carrier settings are correct for the SIM used by the Palm so the device can reach d.plaspy.com or 54.85.159.138.
- Keep a copy of vendor provisioning instructions and any SMS or tool based commands in case you need to reprovision or troubleshoot devices in the field.

## Why Use Plaspy with This Configuration

Using the Traxbean Palm with Plaspy provides a straightforward way to bring handheld personnel telemetry, SOS events, and visual context into a single monitoring workflow. Pointing the Palm at the Plaspy server and port ensures that position updates and incident signals are reliably delivered to the platform for alerting, geofence handling, and historical tracking.

To learn more about Plaspy and how it can integrate device telemetry into your operations, visit https://www.plaspy.com. For the most current device specific setup guidance, firmware notes, and manufacturer tools consult the ThinkRace official site at https://www.thinkrace.com/ as vendor procedures and firmware behavior can change over time.
