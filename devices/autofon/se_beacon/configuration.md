---
slug: /autofon/se_beacon/configuration
id: se_beacon-configuration
sidebar_label: Configuration
title: AutoFon - SE+ Beacon Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for AutoFon SE+ Beacon showing Plaspy server settings and practical integration steps for reliable GPRS reporting
keywords:
  - AutoFon SE+ Beacon configuration
  - AutoFon configuration
  - SE+ Beacon setup
  - Plaspy tracker configuration
  - GPS tracker configuration
  - vehicle tracking setup
  - GPRS tracker integration
  - SE+ Beacon Plaspy compatibility
  - asset tracking configuration
  - tracker server settings
---

# AutoFon - SE+ Beacon Configuration

This page describes the public configuration context for using the AutoFon SE+ Beacon with Plaspy. It focuses on the practical, platform-level server settings and the typical workflow installers and technicians use to prepare the SE+ Beacon for reliable reporting into the Plaspy platform. Use this guide to understand the minimum information required to integrate the device into Plaspy and to verify connectivity after configuration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol so manual protocol selection is not generally required on the server side. Manufacturer-side setup steps for the SE+ Beacon can vary by firmware version, hardware revision, installation type, and vendor configuration tools; consult the device manual for firmware-specific commands and options when needed. The SE+ Beacon reports over GPRS to Plaspy with SMS available as a fallback for alerts and link-based notifications.

## Configuration Overview

Preparing the SE+ Beacon for Plaspy integration ensures the device can reach the platform reliably and that events and location telemetry appear correctly on Plaspy dashboards. The configuration process sets the device to report to Plaspy, verifies network and power conditions, and confirms that heartbeat and event messaging reach the server.

- Configure the device to report GPRS packets to the Plaspy endpoint so live positions and events are received.
- Validate mobile network connectivity, APN settings, and that the SIM with data is provisioned.
- Select the transport mode on the device if required and point it to Plaspy server settings.
- Apply and save configuration, then verify the device appears online in Plaspy.
- Optionally confirm SMS fallback behavior for alerts if GPRS is interrupted.

## Plaspy Server Settings

- Server domain d.plaspy.com as the primary server name to configure on the tracker.
- Server IP 54.85.159.138 can be used where numeric addressing is preferred or required.
- Port 8888 is the Plaspy port used for tracker data ingestion.
- The device may be configured using UDP or TCP on port 8888 depending on the tracker configuration interface.
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port for simplicity.

## Typical Requirements Before Setup

- Confirm the SE+ Beacon has sufficient battery or external power for configuration and testing.
- A valid SIM card with an active data plan and correct APN settings for GPRS reporting.
- Access to the official AutoFon configuration method or tool for the SE+ Beacon (software, SMS commands, or configuration cable).
- Knowledge of the Plaspy server settings: d.plaspy.com or 54.85.159.138 and port 8888, plus transport preference if required.
- A test environment where the device can be restarted and allowed to send initial heartbeat and position messages.
- Optional: an installer account or documentation from the vendor describing SMS-based commands or local configuration utilities.

## How This Tracker Connects to Plaspy

The SE+ Beacon sends GNSS positions and event telemetry over GPRS to the Plaspy endpoint and port so Plaspy can provide live maps, alerts, and historical playback. SMS acts as a secondary path for critical alerts or for configuration where GPRS is not available.

- The tracker is configured to report to the shared Plaspy server endpoint d.plaspy.com (or 54.85.159.138) on port 8888.
- Plaspy receives heartbeat messages and position packets to keep the device visible and actionable in the platform.
- Event alerts such as motion start/stop, tilt, impact, and SOS are forwarded to Plaspy for alerting and rules processing.
- If configured, SMS can be used for quick alerting or for configuration fallback when GPRS is unavailable.
- Plaspy automatically detects the tracker protocol so manual protocol selection on the server side is not required.

## Common Configuration Workflow

1. Access the official AutoFon configuration method for the SE+ Beacon (device software, SMS commands, or a hardware configuration tool) provided by the vendor.
2. In the device configuration, enter the Plaspy server as either d.plaspy.com or 54.85.159.138 depending on the configuration interface.
3. Set the destination port to 8888 which Plaspy uses for all supported devices.
4. Choose UDP or TCP if the device requires a transport selection; the device may be configured to use either transport on port 8888.
5. Enter or confirm APN and mobile network settings so the device can establish a GPRS connection.
6. Apply or save the configuration changes in the device tool or send the SMS command that writes the new settings.
7. Restart the device if required by the manufacturer to apply network and server changes.
8. Validate that the SE+ Beacon reports to Plaspy by confirming heartbeat and position packets appear and that the device shows online in the platform.

## Example Configuration Commands

The SE+ Beacon configuration method and exact commands depend on AutoFon firmware and the vendor tool used. Because manufacturer commands can vary, consult the AutoFon configuration manual for command syntax and examples specific to your firmware. Typical configuration paths include the device configuration utility, SMS-based commands, or a serial configuration tool.

If you have manufacturer-provided SMS commands or a configuration script from AutoFon, follow the order recommended by the manual: set APN, set server domain or IP, set port 8888, select transport if needed, save settings, and then reboot the device. Preserve placeholders such as [apn] or [apnu] if they appear in manufacturer examples and replace them with your network values as instructed by AutoFon.

## Configuration Notes

- Firmware differences between SE+ Beacon revisions can change SMS command syntax and available options; always verify with the device firmware documentation.
- Choose UDP or TCP according to the device interface; Plaspy supports both transports on port 8888 but some installers prefer one for network reliability.
- Keep heartbeat intervals and motion detection sensitivity balanced to maintain battery life while ensuring timely reporting.
- Use the device's large offline buffer to tolerate temporary network outages; confirm heartbeat and buffer upload behavior in the manual.
- If SMS-based configuration is used, test fallback alerts and SMS-to-map links as an additional verification step.

## Why Use Plaspy with This Configuration

Using the AutoFon SE+ Beacon with Plaspy gives organizations discreet, long-duration monitoring with the ability to ingest GNSS positions and event telemetry into a unified platform. The SE+ Beacon's GPRS-first reporting and SMS fallback combine with Plaspy's automatic protocol detection and shared server port to simplify fleet and asset onboarding while preserving reliable visibility and alerting.

To learn more about Plaspy and how it works with devices like the AutoFon SE+ Beacon visit https://www.plaspy.com. For the latest model-specific commands, firmware notes, and manufacturer guidance confirm current details at the AutoFon website https://www.autofon.ru/. Device-specific configuration methods and firmware behavior can change over time so verify steps with the official manufacturer documentation before deployment.
