---
slug: /autoseeker/at_19/configuration
id: at_19-configuration
sidebar_label: Configuration
title: Autoseeker - AT-19 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide for configuring the Autoseeker AT-19 GPS tracker with Plaspy including server settings and practical setup steps
keywords:
  - Autoseeker AT-19 configuration
  - Autoseeker AT-19 setup
  - AT-19 Plaspy configuration
  - AT-19 GPS tracker setup
  - Autoseeker tracker configuration
  - vehicle tracking setup
  - fleet management tracker configuration
  - Plaspy device integration
  - GPS tracker server setup
  - tracking platform configuration
---

# Autoseeker - AT-19 Configuration

This page covers the public configuration context for using the Autoseeker AT-19 2G Mini GPS Tracking Device with Plaspy. It summarizes the shared server settings Plaspy requires, explains the practical workflow for preparing the device, and clarifies what to verify on the manufacturer side before integrating the tracker into the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side setup steps and menus can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so follow this general guidance while confirming device specific steps with official Autoseeker documentation.

## Configuration Overview

Preparing an AT-19 for Plaspy involves configuring the tracker to report position and telemetry to Plaspy servers, validating cellular connectivity, and confirming that Plaspy receives the device messages. The following practical tasks describe the purpose of the configuration process.

- Configure the device to send GNSS and telemetry data to Plaspy server endpoints so locations appear on Plaspy dashboards.
- Ensure the SIM and GSM/GPRS connection are active and that APN settings are correct for the installed SIM.
- Select the transport option supported by the device firmware and set the Plaspy server domain or IP and port.
- Apply and save configuration on the tracker and, if required, reboot the device to start reporting.
- Validate successful reporting by checking that the device is visible and reporting events in Plaspy.

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the AT-19. Plaspy uses the same port for all supported devices and will auto detect the tracker protocol when the device connects.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy performs automatic protocol detection to identify the tracker protocol

## Typical Requirements Before Setup

- A powered AT-19 device with correct wiring and any required installation accessories in place.
- An active SIM card with data enabled and the correct APN configured for the mobile operator.
- Access to the official Autoseeker configuration method or software that the vendor provides for AT-19 setup.
- Knowledge of the device firmware version and any vendor notes about configuration commands or SMS formats.
- A Plaspy account and access to the Plaspy platform to validate device connectivity and visibility.
- Basic tools to reboot the device or cycle power if the tracker requires a restart after configuration.

## How This Tracker Connects to Plaspy

The AT-19 transmits GNSS position and vehicle telemetry to Plaspy over GSM GPRS or SMS depending on the configured reporting method and firmware capabilities. Once configured to point at the shared Plaspy endpoint and port, Plaspy receives and decodes the device messages and displays location and alarm data in the platform.

- Device reports GNSS position and movement data to the Plaspy server endpoint at d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be TCP over GPRS or UDP over GPRS depending on the tracker setting and network conditions.
- Plaspy automatically detects the tracker protocol and maps incoming messages to the appropriate device record.
- Alarm and event messages such as ignition change, overspeed, geofence events, and SOS alerts are forwarded to Plaspy for notification and logging.
- SMS reporting can be used as an alternative reporting path where supported by firmware and vendor workflows.

## Common Configuration Workflow

1. Access the official Autoseeker configuration method or software provided for the AT-19. This may be a vendor configuration tool, SMS command set, or a USB/serial configuration utility.
2. Locate the server or remote reporting settings in the device menu or command list.
3. Enter the Plaspy server address using either the server domain d.plaspy.com or the server IP 54.85.159.138.
4. Set the port to 8888 as this is the Plaspy listening port used for all devices.
5. Choose UDP or TCP transport if the device requires an explicit transport selection.
6. Apply or save the configuration and restart the device if the tool or firmware requires a reboot to activate the new settings.
7. Validate that the device reports to Plaspy by checking device status, incoming positions, and event logs on the Plaspy platform.

## Example Configuration Commands

The AT-19 may be configured via manufacturer supplied tools or by SMS commands depending on the firmware and vendor distribution. Exact commands and the method to send them vary by Autoseeker firmware and the configuration channel used. Consult the Autoseeker documentation or the vendor configuration guide for the precise command set and order required to set server, port, transport, and APN settings.

## Configuration Notes

- Firmware differences can change menu structure and SMS command formats. Confirm the exact command set for your AT-19 firmware before making changes.
- Choose TCP or UDP based on network reliability and any vendor recommendations. Either transport is supported by Plaspy on port 8888.
- If SMS reporting is used as a fallback, verify Plaspy supports the specific SMS format from the device firmware.
- Confirm 2G network availability in your region since the AT-19 is a 2G GSM GPRS device and some carriers have retired 2G services.
- Always reference Autoseeker documentation for wiring, APN fields, and optional feature setup to avoid configuration mistakes.

## Why Use Plaspy with This Configuration

Using the Autoseeker AT-19 with Plaspy provides a straightforward way to bring compact vehicle tracking and telemetry into a centralized fleet management platform. Plaspy receives GNSS position and event data from the AT-19 and presents it alongside alerts, route history, and device status to support operational visibility, incident response, and route optimization.

To learn more about Plaspy and supported device integrations, visit https://www.plaspy.com. For the most current device specific configuration commands, firmware notes, and installation guidance for the AT-19, verify details on the manufacturer website https://autoseekergps.com/ since setup methods and firmware behavior can change over time.
