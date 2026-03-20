---
slug: /castel/mpip_620/configuration
id: mpip_620-configuration
sidebar_label: Configuration
title: Castel - MPIP-620 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the Castel MPIP-620 tracker to the Plaspy platform
keywords:
  - Castel MPIP 620 configuration
  - MPIP 620 setup Plaspy
  - Castel GPS tracker configuration
  - MPIP 620 server configuration
  - Plaspy device setup
  - motorcycle tracker configuration
  - GPRS tracker setup
  - SMS configuration commands
  - vehicle tracking platform setup
  - GPS tracker protocol detection
---

# Castel - MPIP-620 Configuration

This page documents the public configuration context for using the Castel MPIP-620 motorcycle GPS tracker with Plaspy. It covers the shared Plaspy server settings you should apply and the practical steps used to prepare the device for reporting to Plaspy, based on manufacturer style SMS commands and the MPIP 620's GPRS and SMS configuration flow.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but manufacturer side setup steps can vary with firmware, hardware revision, installation type, and vendor tools. Use the guidance below with your device documentation and the official Castel resources to confirm device specific instructions.

## Configuration Overview

The goal of configuring a Castel MPIP 620 for Plaspy is to point the tracker to Plaspy servers, ensure GPRS connectivity, and verify that periodic or event driven reports reach the platform. The process is intentionally simple for installers who use SMS or a manufacturer tool to program network settings and the reporting endpoint.

- Set APN and GPRS parameters so the tracker can reach the mobile network
- Configure the tracker to report to the Plaspy server endpoint and port
- Choose transport UDP or TCP on port 8888 based on device requirements
- Verify settings using the tracker verification command or status reply
- Confirm device appears and reports in the Plaspy platform for visibility and alerts

## Plaspy Server Settings

- Server domain d.plaspy.com should be used where the device supports domain names
- Server IP 54.85.159.138 may be used when an IP address is required
- Port 8888 is the Plaspy receive port used for all supported devices
- Transport support for UDP or TCP is available; configure the transport the device requires
- Plaspy automatically detects the tracker protocol so devices reporting to the endpoint will be interpreted correctly

## Typical Requirements Before Setup

- A working SIM card with data enabled and the correct APN for the mobile operator
- Access to the device or an installer method to send SMS configuration commands
- Knowledge of the device SMS secret key or password used for remote configuration
- Power applied to the tracker and the device in a state that accepts SMS commands
- Access to the Castel MPIP 620 user guide for any device specific steps or firmware notes

## How This Tracker Connects to Plaspy

The MPIP 620 uses GPRS for data reporting and SMS for configuration, and it is configured to send its location and alerts to the Plaspy server endpoint and port. Once programmed with the server settings, the device transmits periodic location updates and event notifications to Plaspy where they are parsed and displayed.

- The tracker is set to report to the shared Plaspy endpoint at 54.85.159.138 on port 8888
- Transport may be configured as UDP or TCP depending on device firmware and installer choice
- Plaspy receives the data and automatically detects the device protocol for correct parsing
- Reports include location updates and event alerts configured on the device such as movement or alarm events
- Successful connection enables visibility, history, and alerting through the Plaspy platform

## Common Configuration Workflow

1. Access the official Castel configuration method such as SMS commands or manufacturer software as described in the MPIP 620 documentation.
2. Enter the Plaspy server using either d.plaspy.com or the IP address 54.85.159.138 depending on what the device accepts.
3. Set the reporting port to 8888 in the tracker settings.
4. Choose UDP or TCP transport if the device requires selecting a transport mode.
5. Apply or save the configuration to the device using the manufacturer tool or by sending the SMS command.
6. Restart the device if the tracker requires a reboot to apply network changes.
7. Validate that the device reports to Plaspy by checking for incoming data in the platform and by using any verification command supported by the tracker.

## Example Configuration Commands

The MPIP 620 supports SMS based configuration. The following examples come from the device public configuration flow. Preserve the placeholders when you customize the commands.

Notes:
- {{SecretKey}} is the device SMS password. The device default secret key is the last 6 ASCII characters of the device ID unless changed by the installer.
- [apn], [apnu], and [apnp] are placeholders for your mobile operator APN, APN username, and APN password respectively.

Set APN and server (GPRS) using SMS
```
*{{SecretKey}}#set gprs#[apn],[apnu],[apnp],54.85.159.138,8888*
```

Verify GPRS settings using SMS
```
*{{SecretKey}}#get gprs#*
```

If your installation requires the device to accept a domain instead of IP and the device supports domain names in its GPRS command format, you may substitute d.plaspy.com for the IP address above. Confirm the exact syntax in the Castel MPIP 620 user guide.

## Configuration Notes

- Firmware differences may change exact SMS syntax or available fields; always confirm with the MPIP 620 manual for your firmware version.
- The tracker supports SMS based programming as shown above, which is useful for field installs without a PC tool.
- Choose TCP or UDP according to installer preference and device capability; both transports are supported for port 8888 on Plaspy.
- The default SMS secret key behavior is device specific. The MPIP 620 default secret key is the last 6 ASCII characters of the device ID unless previously reprogrammed.
- Confirm APN values with the mobile operator and keep placeholders [apn], [apnu], and [apnp] accurate when sending commands.

## Why Use Plaspy with This Configuration

Using the Castel MPIP 620 with Plaspy provides a straightforward path to add motorcycle tracking, movement alerts, and route history into a single fleet or asset monitoring platform. The MPIP 620's GPRS reporting combined with Plaspy's automatic protocol detection makes onboarding faster and reduces the need for device specific server tuning.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the most current manufacturer specific configuration details, firmware notes, and device documentation please verify information on the Castel website http://www.castelecom.com/ as device features and setup methods can change over time.
