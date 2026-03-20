---
slug: /v_sun/tlt_2n/configuration
id: tlt_2n-configuration
sidebar_label: Configuration
title: V-SUN - TLT-2N Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for V-SUN TLT-2N setup for use with Plaspy platform and server settings
keywords:
  - V-SUN TLT-2N configuration
  - V-SUN TLT-2N setup
  - TLT-2N server configuration
  - TLT-2N SMS commands
  - Plaspy tracker setup
  - Plaspy device configuration
  - GPS tracker server settings
  - GPRS tracker configuration
  - vehicle tracking setup
  - GPS platform integration
---

# V-SUN - TLT-2N Configuration

This page documents the public configuration context for using the V-SUN TLT-2N tracker with Plaspy. It summarizes the practical server settings and example SMS commands that are commonly used to point a TLT-2N at the Plaspy platform for GPRS TCP tracking and SMS management. Use this as a technical reference to prepare the device for visibility on Plaspy while following your vendor and manufacturer guidance.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol at the server side. Exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The TLT-2N supports SMS configuration and GPRS TCP connections, so the example SMS commands shown on this page are the published public commands used for many setups.

## Configuration Overview

The goal of the configuration process is to prepare the TLT-2N to report location and events to the Plaspy server endpoint and to validate connectivity so the device is visible on the platform.

- Configure the device APN and GPRS settings so it can establish a data session.
- Point the device GPRS server to the Plaspy endpoint using the server domain or server IP and the shared port.
- Choose the transport mode the device supports (UDP or TCP) and save the setting.
- Enable GPRS reporting and GPS reporting modes so the device sends regular updates.
- Validate the device reports to Plaspy and appears in the platform before final installation.

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the TLT-2N. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP is supported; select the transport the device requires
- Plaspy will automatically detect the device protocol when the device connects to the server

## Typical Requirements Before Setup

- A powered and accessible TLT-2N device with the ability to receive SMS or accept GPRS configuration.
- A working SIM card with data enabled and SMS capability installed in the device and with the correct APN for the network.
- Knowledge of the mobile operator APN and any required APN username or password.
- Access to the device SMS command list or manufacturer configuration tool for sending configuration commands.
- The device default password if required for SMS commands. The public example commands use the default password 0000.
- Basic ability to monitor connectivity, for example by checking whether the device establishes a GPRS session and reports to Plaspy.

## How This Tracker Connects to Plaspy

The TLT-2N can send position and event data to the Plaspy platform over GPRS TCP or UDP. Using the server settings above, the tracker opens a connection to the shared Plaspy endpoint and reports according to its configured reporting intervals and enabled features.

- The tracker is configured to report to the Plaspy server endpoint at d.plaspy.com or 54.85.159.138.
- Data is sent over the selected transport on port 8888 which Plaspy uses for all devices.
- Plaspy automatically detects the tracker protocol on receiving connections to the server.
- The device can also be configured and queried via SMS commands for setup or troubleshooting.
- When configured correctly, regular location, alarms, and historical uploads appear in Plaspy for monitoring and analysis.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or SMS command list for the TLT-2N. Use the vendor guide or the device SMS interface.
2. Configure the device APN with the operator parameters using the APN command and include APN username and password if needed.
3. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the GPRS server setting.
4. Set the port to 8888 as the device GPRS reporting port.
5. Choose UDP or TCP if the device requires a transport selection for GPRS reporting.
6. Apply or save the configuration and, if applicable, send any commands that enable GPRS and GPS reporting modes.
7. Restart or power cycle the device if required by the manufacturer and verify that it establishes a connection to Plaspy and reports as expected.

## Example Configuration Commands

The TLT-2N supports SMS based configuration. The following public SMS commands are provided in the device documentation and are presented here in the order shown in the manufacturer example. The default device password in these examples is 0000.

- Factory reset (optional initial step)
```text
*RESET#0000##
```
Note: This reset command is typically used only when you need to restore factory defaults.

- Set the operator APN
```text
#803#0000#{{apn}}#{{apnu}}#{{apnp}}##
```
Replace the placeholders as needed:
- {{apn}} is the operator APN string
- {{apnu}} is the APN username if required by the carrier
- {{apnp}} is the APN password if required by the carrier
If your operator does not require username or password, omit those placeholders and keep the correct number of separators as required by the device.

- Set the GPRS server by IP and port to point to Plaspy
```text
#804#0000#54.85.159.138#8888##
```
You may also use the server domain instead of the IP if the device accepts a domain name in the same command format. When entering a domain, use d.plaspy.com where supported.

- Set the update interval for movement reporting
```text
#805#0000#120#1##
```
This example sets a moving report interval value as published by the manufacturer; adjust numbers as needed for your reporting policy.

- Set the update interval for static reporting
```text
#809#0000#120#1##
```
Adjust the static interval parameter value to suit your requirements.

- Enable GPRS mode
```text
7100000
```

- Enable GPS mode
```text
2220000
```

Send each command as an SMS to the device SIM number. Keep the exact command syntax and number of separators as shown; some versions of device firmware are strict about formatting.

## Configuration Notes

- Firmware differences and hardware revisions may change the exact command syntax or available parameters. Always verify commands against your device documentation.
- The TLT-2N supports SMS based configuration and GPRS TCP reporting; use SMS when remote configuration via IP is not yet available.
- When the device requires a transport selection, choose UDP or TCP according to your deployment needs; Plaspy accepts either and auto detects protocol on connection.
- Plaspy uses port 8888 for all supported devices. Use this port when pointing the device to the platform.
- Keep the default password 0000 in mind when sending setup commands and change it if your installation policy requires a different password after initial setup.

## Why Use Plaspy with This Configuration

Using the V-SUN TLT-2N with Plaspy provides a practical way to collect location updates and device events from vehicles and small fleet assets. With the shared Plaspy server settings and automatic protocol detection, integrating the TLT-2N into the platform can be achieved with a small set of SMS or GPRS configuration steps so you can monitor position, alarms, and history from a centralized system.

To learn more about Plaspy and how it handles device connections, visit https://www.plaspy.com. For the latest device specific configuration methods, firmware notes, and manufacturer guidance for the V-SUN TLT-2N check the official V-SUN site at http://www.v-sun.cc/ as vendor documentation and firmware behavior can change over time.
