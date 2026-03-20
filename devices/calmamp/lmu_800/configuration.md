---
slug: /calmamp/lmu_800/configuration
id: lmu_800-configuration
sidebar_label: Configuration
title: CalmAmp - LMU-800 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for CalmAmp LMU-800 and Plaspy server settings for reliable vehicle tracking
keywords:
  - CalmAmp LMU-800 configuration
  - CalmAmp LMU-800 setup
  - LMU-800 Plaspy configuration
  - CalmAmp GPS tracker configuration
  - LMU-800 server configuration
  - LMU-800 setup for Plaspy
  - CalmAmp vehicle tracker setup
  - LMU-800 installation guide
  - fleet tracking LMU-800
  - GPS tracker Plaspy compatibility
---

# CalmAmp - LMU-800 Configuration

This page covers the public configuration context for using the CalmAmp LMU-800 tracker with Plaspy. It explains the shared server settings you must apply so the device reports to Plaspy, and summarizes the practical steps and SMS based commands publicly published for basic setup. The LMU-800 is a compact vehicle tracking device with a backup battery, motion sensing, and on board programmable events which makes it suitable for automotive tracking and service use cases that require resilience during power loss.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware revision, hardware revision, installation type, and vendor tools. The LMU-800 supports SMS based configuration in many installations and also supports over the air configuration methods that vendors provide, so confirm which method applies to your device before changing live settings.

## Configuration Overview

The goal of the configuration process is to prepare the LMU-800 to communicate reliably with Plaspy so location and device events are visible in the fleet platform. This typically means applying network credentials, pointing the device at the Plaspy endpoint, selecting a transport if required by the device, and validating connectivity.

- Configure the device network settings such as APN and credentials so GPRS can connect.
- Set the device GPRS server to the Plaspy server endpoint so it reports to the platform.
- Confirm the server port and transport mode match Plaspy requirements.
- Reboot or apply changes and validate that the device appears in Plaspy.
- Use manufacturer provided verification commands or tools to inspect the applied settings.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- All devices in Plaspy use the same port 8888
- Plaspy automatically detects the tracker protocol so the platform will accept the device data format without manual protocol selection on the server

## Typical Requirements Before Setup

- A charged or powered LMU-800 with an active SIM that supports GPRS data and SMS if using SMS based configuration.
- Access to the device identifier returned by the LMU device so SMS commands target the correct unit; the LMU replies with a MID when queried.
- APN settings from the mobile operator including APN name and optionally username and password.
- A method to send SMS commands to the device or access to the manufacturer OTA configuration tool if available.
- Console or phone access to receive SMS replies and confirm success messages from the device.

## How This Tracker Connects to Plaspy

The LMU-800 is configured to report its telemetry and events to the shared Plaspy server endpoint and port. Once the device can establish a GPRS session and reach the Plaspy endpoint, Plaspy will ingest the tracker data, automatically detect the protocol, and make the device visible in the platform for monitoring and event handling.

- The device uses GPRS to connect to the configured server IP or domain.
- Telemetry and event messages are sent to d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy accepts either UDP or TCP transport from the device and detects the protocol automatically.
- Device events and location updates become available in Plaspy for operational monitoring and reporting.
- Reboots or configuration changes are used to apply new server settings and reestablish connectivity.

## Common Configuration Workflow

1. Access the official manufacturer configuration method for your LMU-800 either via SMS commands, the vendor OTA system, or the vendor configuration tool as provided by the installer.
2. If configuring by SMS for GPRS, obtain the device MID or ID by sending the manufacturer query command to retrieve the unit identifier.
3. Enter the Plaspy server endpoint by setting domain d.plaspy.com or the server IP 54.85.159.138 in the device configuration.
4. Set the server port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration and reboot the device if required by the device or workflow.
6. Validate that the device reports to Plaspy by checking the device status with the manufacturer verification command and confirming visibility in the Plaspy platform.

## Example Configuration Commands

The LMU-800 can be configured using SMS commands. The following public commands are presented in the order recommended for initial setup. The device ID is the MID 10 digit value returned by the device in response to the manufacturer query command. Preserve the placeholders shown and replace them with your operator values as needed.

- Retrieve device MID or identifier
```text
!R0
```
Send this command to query the device and receive the MID or unit ID that identifies the tracker for subsequent SMS configuration.

- Set the operator APN
```text
!RP,2306,0,{{apn}}
```
Replace {{apn}} with your mobile operator APN name.

- Set the APN username (if required)
```text
!RP,2314,0,{{apnu}}
```
Replace {{apnu}} with the APN username if your operator requires one. This command is optional if no username is needed.

- Set the APN password (if required)
```text
!RP,2315,0,{{apnp}}
```
Replace {{apnp}} with the APN password if required. This is optional depending on operator settings.

- Set the GPRS server IP to Plaspy
```text
!RP,2319,0,54.85.159.138
```
This points the device to the Plaspy server IP. You may alternatively use d.plaspy.com depending on device support.

- Set the server port to Plaspy port
```text
!RP,769,0,8888
```
This sets the device to use port 8888 which is the shared Plaspy port for all devices.

- Reboot the tracker to apply settings
```text
!R3,70,0
```
A reboot is commonly required to apply the new network and server settings. Use this after saving configuration.

- Verify applied settings
```text
!RO
```
This verification command returns current configuration settings so you can confirm APN, server, and port values.

Notes on placeholders
- {{apn}} is the operator APN name required for data connectivity.
- {{apnu}} and {{apnp}} are optional and used only if your mobile operator requires an APN username and password.

## Configuration Notes

- Firmware and hardware revisions can change command availability and exact syntax so confirm command support for your LMU-800 firmware.
- Many deployments use SMS for initial setup but CalAmp PULS or vendor OTA tools may be the recommended method for broad rollouts and remote management.
- Choose UDP or TCP according to installer preference and network conditions; Plaspy accepts both and will detect the protocol.
- Always confirm APN credentials with the mobile operator before applying them to the device.
- If a reboot is required to apply settings use the provided reboot command or follow the vendor recommended restart procedure.

## Why Use Plaspy with This Configuration

Using the LMU-800 with Plaspy gives organizations a straightforward way to centralize vehicle tracking, receive event alerts, and monitor device status on a single platform. The LMU-800 provides the device capabilities needed for resilient tracking while Plaspy provides a consistent server endpoint and automatic protocol detection so devices can be integrated with minimal per device server configuration.

To learn more about Plaspy visit https://www.plaspy.com and review the latest device specific documentation and firmware notes on the manufacturer site http://www.calamp.com/ to verify current configuration methods and command support.
