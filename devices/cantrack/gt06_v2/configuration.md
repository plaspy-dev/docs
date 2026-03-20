---
slug: /cantrack/gt06_v2/configuration
id: gt06_v2-configuration
sidebar_label: Configuration
title: CanTrack - GT06 v2 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for CanTrack GT06 v2 showing how to point the tracker to Plaspy servers for real time tracking
keywords:
  - CanTrack GT06 v2 configuration
  - CanTrack GT06 v2 setup
  - GT06 v2 server configuration
  - GT06 v2 Plaspy setup
  - CanTrack GPS tracker configuration
  - Plaspy server settings
  - vehicle tracker configuration guide
  - GT06 v2 SMS commands
  - GPRS tracker setup
  - fleet tracker configuration
---

# CanTrack - GT06 v2 Configuration

This page covers the public configuration context for using the CanTrack GT06 v2 tracker with Plaspy. The GT06 v2 uses GSM GPRS and GPS to gather location data and can report that data either by SMS to authorized numbers or by GPRS to an internet server for real time tracking. This guide focuses on the publicly available setup steps and example SMS commands to configure the device to send data to Plaspy using the shared Plaspy server settings.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device reports. Manufacturer side configuration steps can vary by firmware version, hardware revision, installation method, and vendor tools. The GT06 v2 supports SMS based configuration as shown in the example commands below, but you should verify exact procedures against the current manufacturer documentation if you see different behavior.

## Configuration Overview

The purpose of configuring a GT06 v2 for Plaspy is to prepare the tracker to communicate reliably with the Plaspy platform so that location and basic device events are visible in Plaspy's tracking interface. Configuration typically involves setting network APN details, defining the Plaspy server endpoint, choosing the transport protocol if required, and verifying that the device reports correctly.

- Set the device APN and any operator authentication so the tracker can use GPRS
- Configure the GPRS server address or domain to point to Plaspy
- Choose UDP or TCP transport on the device if required and set the shared Plaspy port
- Validate connectivity and confirm the device reports to Plaspy for real time visibility
- Use SMS commands or the official manufacturer tool depending on installer preference

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol
- Note that all devices in Plaspy use the same port for server reporting

## Typical Requirements Before Setup

- A powered GT06 v2 with access to its SMS or manufacturer configuration method
- An active SIM card in the device with data enabled and the correct APN for the mobile operator
- The tracker default password known for SMS configuration if using SMS commands for setup (example default password used in examples is 123456)
- Access to the CanTrack user manual or vendor configuration tool for reference when needed
- A way to monitor the device after setup to confirm it reports to Plaspy

## How This Tracker Connects to Plaspy

The GT06 v2 can transmit location data over the mobile network using GPRS to a configured server address. When pointed at the Plaspy server endpoint and port, incoming tracker messages are matched by Plaspy and the platform will automatically detect the correct protocol for processing.

- The device is configured to report to the shared Plaspy server endpoint and port
- Reporting can use either UDP or TCP depending on device configuration and operator preference
- Plaspy receives the GPRS data and maps the device to the Plaspy account by protocol detection
- SMS remains available for simple alerts and local verification of settings on authorized numbers
- Once reporting is confirmed, location visibility and event updates appear in Plaspy

## Common Configuration Workflow

1. Access the official CanTrack configuration method you prefer such as SMS commands or the vendor tool documented by CanTrack
2. Ensure the SIM and APN are configured on the device so it can connect to the mobile data network
3. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 as the GPRS server
4. Set the port to 8888 which is the shared port used by Plaspy for all devices
5. Select UDP or TCP transport if your device requires a transport selection
6. Apply or save the configuration on the device and restart the tracker if required by firmware
7. Validate the device reports to Plaspy and appears in the platform before final installation

## Example Configuration Commands

The GT06 v2 supports SMS based configuration. Below are example SMS commands reported in public documentation. The device default password used in these examples is 123456. Keep the command order when that order matters; the factory reset is optional and used only when you want to restore defaults before setup.

- Optional factory reset to begin configuration
```text
begin123456
```

- Set the operator APN
```text
apn123456 {{apn}} {{apnu}} {{apnp}}
```
Explanation: replace {{apn}} with the operator APN string, {{apnu}} with the APN username if required, and {{apnp}} with the APN password if required. Leave username or password blank if not used.

- Set the timezone to UTC0 (example)
```text
timezone123456 0
```

- Set the GPRS server by IP and port to point the tracker to Plaspy
```text
adminip123456 54.85.159.138 8888
```
You may alternatively use the domain d.plaspy.com where the device accepts domain names instead of the IP.

- Check current device settings
```text
check123456
```

## Configuration Notes

- SMS based configuration is a common public method for GT06 v2 but vendor tools or firmware utilities may also be available for batch provisioning
- Different firmware versions or hardware revisions may accept slightly different command formats or have different default passwords and behavior
- Choose UDP or TCP according to installer preference and network conditions; Plaspy supports both and will detect the protocol automatically
- Preserve placeholders such as {{apn}} {{apnu}} and {{apnp}} and substitute values supplied by your mobile operator
- If you perform a factory reset as an initial step, reapply APN and server settings afterward

## Why Use Plaspy with This Configuration

Configuring the CanTrack GT06 v2 to point at Plaspy provides a straightforward path to integrate a compact vehicle tracker with a centralized fleet management platform. Using the shared Plaspy server settings makes it easier to provision multiple devices consistently and rely on Plaspy's automatic protocol detection to handle incoming messages from the GT06 v2.

To learn more about Plaspy and how it manages device connectivity and fleet visibility visit https://www.plaspy.com. For the latest device specific configuration methods, firmware notes, and full CanTrack documentation please verify details on the official manufacturer website https://www.cantrackgps.com/ as setup steps and firmware behavior can change over time.
