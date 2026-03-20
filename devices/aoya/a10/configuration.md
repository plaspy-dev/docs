---
slug: /aoya/a10/configuration
id: a10-configuration
sidebar_label: Configuration
title: AoYa - A10 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the AoYa A10 tracker showing how to point the device to Plaspy and run basic SMS setup
keywords:
  - AoYa A10 configuration
  - AoYa A10 setup
  - AoYa A10 server configuration
  - A10 GPS tracker Plaspy
  - Plaspy tracker setup
  - AoYa GPS configuration
  - vehicle tracker configuration
  - GPS tracker setup guide
  - GPRS tracker configuration
  - SMS configuration commands
---

# AoYa - A10 Configuration

This page documents the public configuration context for using the AoYa A10 GPS tracker with the Plaspy platform. It focuses on the practical steps and settings used to point an A10 device at Plaspy servers and validate connectivity. Where manufacturer-side commands are publicly available we include them so installers and integrators can follow a clear setup flow.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The A10 supports SMS command configuration as shown below, and that method is commonly used to set the APN, server endpoint, transport, and other basic parameters before the device is visible in Plaspy.

## Configuration Overview

The goal of configuration is to prepare the A10 so it reliably reports location and status to Plaspy and appears in the platform for monitoring and analysis. Typical public configuration tasks include setting network APN, selecting transport, and pointing the device to the Plaspy server endpoint.

- Use the manufacturer supported configuration method to set device password, APN, and server address.
- Configure the operator APN and, if required, APN username and password so the device can start a GPRS session.
- Point the device to Plaspy server endpoint and port to ensure telemetry is routed to the platform.
- Choose UDP or TCP transport on the device if required; Plaspy can accept either.
- Verify settings and validate the device is reporting to Plaspy before final installation.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the AoYa A10:

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: the device may be configured to use UDP or TCP on port 8888
- Protocol detection: Plaspy automatically detects the tracker protocol after the device connects

These values are the shared endpoint settings Plaspy uses for supported devices and should be the target of the A10 GPRS configuration.

## Typical Requirements Before Setup

- A fully charged device battery or connection to a stable power source for configuration and testing.
- A compatible cellular SIM with data enabled and the correct APN information from the mobile operator.
- Ability to send SMS commands to the device if using the SMS configuration method shown below.
- Knowledge of the device password. The A10 public sample configuration uses the default password 123456.
- Access to the official AoYa documentation or vendor tools for reference on firmware variations and additional commands.
- A test environment or staging Plaspy account to confirm the device appears and reports as expected.

## How This Tracker Connects to Plaspy

The AoYa A10 is configured to open a GPRS connection and send its telemetry to Plaspy using the shared server endpoint and port. After the device establishes a GPRS session and connects to the Plaspy endpoint, the platform automatically detects the tracker protocol, so no separate protocol registration is required on Plaspy.

- The device uses the configured APN to obtain cellular data connectivity.
- The A10 is pointed at the Plaspy server domain or IP and the common port used by Plaspy.
- Transport is set on the device to UDP or TCP depending on installer preference or firmware support.
- Once connected, the tracker sends location and device messages to the Plaspy endpoint and becomes visible in the platform.
- Plaspy auto detects protocol and begins interpreting the incoming messages without per-device protocol configuration.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or AoYa documentation for the A10, typically SMS commands or vendor tools.
2. Ensure the SIM is inserted, has data enabled, and collect APN details (APN, APN username, APN password) from the operator.
3. Enter the Plaspy server information using either the domain name d.plaspy.com or the IP 54.85.159.138.
4. Set the server port to 8888 in the device settings.
5. Choose UDP or TCP transport on the device if it requires an explicit selection.
6. Apply or save the configuration and, if needed, restart the device or perform the optional factory reset step.
7. Validate that the device successfully establishes a GPRS session and reports to Plaspy by checking device activity in the platform.

## Example Configuration Commands

The AoYa A10 supports SMS based configuration. Below are the publicly available SMS commands and their intended order. Replace placeholders where indicated.

- Optional initial factory reset (use only when needed as an initial step):
```text
begin123456
```
- Set the time zone to UTC 0:
```text
time zone123456 0
```
- Set the operator APN (replace [apn] with your operator APN):
```text
apn123456 [apn]
```
- Optional: set the APN username and password if your operator requires them (replace [apnu] and [apnp] with actual credentials):
```text
up123456 [apnu] [apnp]
```
- Set the GPRS server to the Plaspy IP and port (Plaspy also accepts the domain d.plaspy.com; here the public IP is used):
```text
adminip123456 54.85.159.138 8888
```
- Switch to GPRS mode and choose transport. The device accepts a variant indicating UDP or TCP depending on firmware. Example commands provided by the manufacturer:
```text
gprs123456,1,1
```
or a simpler form:
```text
gprs123456
```
- Verify current settings:
```text
check123456
```

Notes on placeholders:
- [apn] is the mobile operator APN.
- [apnu] and [apnp] are the APN username and password if required by the operator.
- The sample default device password used in commands above is 123456 as provided in the public configuration examples.

## Configuration Notes

- The SMS command syntax and available parameters can vary by firmware version and hardware revision; consult official AoYa documentation if a command is not accepted.
- SMS based setup is commonly used for A10 devices, but vendor tools or USB/serial configuration options may be available depending on the model and firmware.
- Choose UDP or TCP based on your deployment needs. Plaspy accepts either, and Plaspy will automatically detect the tracker protocol after a successful connection.
- The sample commands include a default password 123456 in the public documentation; change device passwords where supported and appropriate for security.
- Always verify APN credentials with the mobile operator and confirm network registration before expecting successful GPRS connections.

## Why Use Plaspy with This Configuration

Using the AoYa A10 with Plaspy gives a straightforward way to combine a compact tracker with a platform that accepts a shared server endpoint and automatically detects the device protocol. This reduces per-device platform configuration and accelerates deployment for vehicle tracking, monitoring, and fleet operations.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer guidance verify the current AoYa A10 documentation at http://www.aoyagps.com/ as setup methods and firmware behavior can change over time.
