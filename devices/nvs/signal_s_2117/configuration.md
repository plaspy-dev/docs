---
slug: /nvs/signal_s_2117/configuration
id: signal_s_2117-configuration
sidebar_label: Configuration
title: NVS - SIGNAL S-2117 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the NVS SIGNAL S-2117 showing Plaspy server settings SMS commands and setup steps for fleet tracking
keywords:
  - NVS SIGNAL S-2117
  - NVS SIGNAL S-2117 configuration
  - NVS tracker setup
  - SIGNAL S-2117 APN settings
  - Plaspy tracker configuration
  - Plaspy server setup
  - GPS tracker configuration
  - vehicle tracking setup
  - fleet tracking configuration
  - NVS GPS tracker integration
---

# NVS - SIGNAL S-2117 Configuration

This page documents the public configuration context for using the NVS SIGNAL S-2117 with Plaspy. It summarizes the practical steps and public SMS commands that are commonly used to prepare the tracker to send data to Plaspy, and it highlights the shared server values Plaspy requires. Use this page as a configuration reference while following official NVS documentation for device specific details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The SIGNAL S-2117 supports SMS based configuration in the public examples below, and the device description notes an open protocol and a certified NV08C receiver which make it suitable for integration into monitoring and dispatch systems.

## Configuration Overview

This configuration process prepares the SIGNAL S-2117 to communicate with Plaspy so that vehicle location and status messages arrive at the Plaspy server and become visible in your Plaspy account. The practical configuration covers setting APN and GPRS parameters, pointing the device to Plaspy server values, and enabling data reporting so the platform can automatically detect the tracker protocol.

- Set the SIM operator APN and optional APN credentials so the device can open a GPRS connection.
- Configure the GPRS server address and port to point to Plaspy so telemetry is routed to the platform.
- Enable GPRS data mode or the equivalent network mode so the tracker sends periodic position updates.
- Validate connectivity and visibility on Plaspy by confirming the tracker reports to the shared server and port.
- Use the provided SMS commands or manufacturer tools to apply and verify settings where applicable.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects to the shared server and port

## Typical Requirements Before Setup

- A powered and installed SIGNAL S-2117 unit with a working SIM card enabled for data and SMS.
- Knowledge of the APN settings provided by your mobile operator (APN name and optional username and password).
- Access to send SMS commands to the tracker or access to the official NVS configuration tool depending on your preferred method.
- The device default password if required by the tracker SMS commands or software configuration. Public examples use password 123456.
- A planned test window for validating the tracker reports to Plaspy after configuration.

## How This Tracker Connects to Plaspy

The SIGNAL S-2117 is configured to open a GPRS connection and send location and device status messages to the Plaspy server endpoint. Once the tracker reaches the configured Plaspy server and port, Plaspy will automatically detect the tracker protocol and present device data in the platform.

- The device is pointed to the Plaspy server using the server domain or server IP and the shared port.
- GPRS mode is enabled so the tracker can transmit telemetry over the mobile data connection.
- The tracker sends periodic or event driven reports to the Plaspy endpoint so location and alarm data become visible.
- Successful connection is validated when Plaspy receives the device messages and shows the tracker online.
- Plaspy’s automatic protocol detection removes the need to manually select a protocol in most cases.

## Common Configuration Workflow

1. Access the official NVS configuration method or software or prepare to send SMS commands according to NVS instructions.
2. Set the device APN to your operator APN so the tracker can establish a GPRS connection.
3. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
4. Set the server port to 8888 in the device configuration.
5. Choose UDP or TCP if the device requires a transport selection and supports both options.
6. Apply or save the configuration on the tracker and restart the device if required by the device firmware.
7. Validate that the device reports to Plaspy by checking that Plaspy receives the first messages and that the device appears online.

If you prefer SMS based setup, follow the manufacturer SMS commands shown below and then validate connectivity in Plaspy.

## Example Configuration Commands

The following public SMS commands are provided in NVS examples for the SIGNAL S-2117. The sample commands use the device default password 123456. Replace placeholders and values to match your operator APN and credentials. Labelled steps are presented in recommended order.

- Optional initial factory reset (only when required):
```
begin123456
```

- Set the device time zone to UTC 0:
```
time zone123456 0
```

- Set the operator APN. Replace [apn] with your SIM operator APN name:
```
apn123456 [apn]
```
Note: [apn] is a placeholder for your operator APN string.

- Set APN username and password if your operator requires them. Replace [apnu] and [apnp] with the APN username and password:
```
up123456 [apnu] [apnp]
```
Note: Keep the placeholders if your APN has no username or password.

- Set the GPRS server to Plaspy using the public server IP and port. This points the tracker to Plaspy for telemetry:
```
adminip123456 54.85.159.138 8888
```
You can use the server domain in device interfaces that accept hostnames instead of the IP address:
- Use d.plaspy.com where hostname entry is supported.

- Switch the device to GPRS mode. The device accepts either of these commands:
```
gprs123456,1,1
```
or
```
gprs123456
```

- Verify or check current settings:
```
check123456
```

Follow the command order above for initial configuration. After sending commands, allow the device time to register on the network and open a data session before validating the connection on Plaspy.

## Configuration Notes

- The sample SMS commands use the public default password 123456. Confirm the correct password for your unit before sending commands and change it if recommended by the manufacturer.
- SMS based configuration is shown in public examples, but NVS tools or a software configuration interface may also be available and can offer a more controlled setup experience.
- TCP and UDP transport options are both supported; choose the transport required by your deployment or leave the default if Plaspy will detect the protocol automatically.
- Firmware variations and hardware revisions can change supported command syntax or available parameters. Always check device feedback after each command.
- APN username and password fields are optional for many operators. Use the up command only when your operator requires authentication.

## Why Use Plaspy with This Configuration

Configuring the NVS SIGNAL S-2117 to report to Plaspy gives organizations unified visibility of vehicle location and status on a single platform. Because Plaspy uses a shared server endpoint and automatic protocol detection, integrating this tracker typically requires only the APN and server settings shown above, which simplifies onboarding for fleets and monitoring deployments.

To learn more about Plaspy visit https://www.plaspy.com and refer to the manufacturer for the most current device documentation at https://www.nvs-ts.ru/. Manufacturer specifications, firmware behavior, and exact setup methods can change over time so verify the latest device specific details with official NVS documentation.
