---
slug: /gnxis/8_wire/configuration
id: 8_wire-configuration
sidebar_label: Configuration
title: Gnxis - 8-wire Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Gnxis 8-wire tracker showing Plaspy server settings and practical setup steps for platform compatibility
keywords:
  - Gnxis 8-wire configuration
  - Gnxis 8-wire setup
  - Gnxis tracker configuration
  - Gnxis 8-wire Plaspy
  - Gnxis GPS tracker configuration
  - 8-wire tracker setup
  - Gnxis configuration guide
  - vehicle tracking setup
  - fleet tracking configuration
  - GPS tracker server configuration
---

# Gnxis - 8-wire Configuration

This page covers the public configuration context for using the Gnxis 8-wire GPS tracker with Plaspy. It collects the practical, publicly available settings and commands you will commonly need to direct the device to the Plaspy server so that the tracker is visible and reporting on the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. Where available this page includes the Gnxis SMS commands that are commonly used to apply the required settings and validate connectivity.

## Configuration Overview

The goal of this configuration is to prepare the Gnxis 8-wire tracker to communicate reliably with Plaspy and to verify that location and event data are reaching the platform. Many Gnxis devices can be configured using SMS commands, and the steps below reflect the public SMS-based commands that manufacturers commonly publish.

- Point the tracker to the Plaspy server endpoint so packets are delivered to the platform.
- Configure the device APN, GPRS mode, and transport to enable cellular data reporting.
- Apply device-specific settings such as time zone, reporting interval, and alarm behavior.
- Validate connectivity and confirm the tracker appears in Plaspy after configuration.
- Use the manufacturer method or SMS interface to securely change default credentials if required.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices use the same port for server connections

## Typical Requirements Before Setup

- A charged and installed Gnxis 8-wire tracker with access to the SIM card slot.
- An active SIM with data enabled and SMS capability for SMS based configuration.
- APN credentials for the mobile operator if required (APN, username, password).
- Knowledge of the device default password so SMS configuration commands can be accepted.
- Access to the device phone number or installer tool used to send SMS or manufacturer configuration software.
- Network coverage on a supported LTE or GSM frequency for GPRS connection.

## How This Tracker Connects to Plaspy

The Gnxis 8-wire is configured to report position and alert data to the shared Plaspy server endpoint and port. Once the device is pointed to Plaspy and GPRS is active, the tracker sends regular location updates and event messages that the platform ingests and displays.

- Device uses GPRS to open a connection to the Plaspy server domain or IP on port 8888.
- Transport can be either UDP or TCP depending on device configuration; select the transport the device supports.
- Plaspy automatically detects the incoming tracker protocol so standard server settings are sufficient.
- Location updates, SOS and alarm events, and status messages are forwarded to the Plaspy platform for monitoring.
- All devices supported by Plaspy share the same port configuration which simplifies integration.

## Common Configuration Workflow

1. Access the official manufacturer configuration method such as the Gnxis SMS command interface or vendor software.
2. Enter the Plaspy server address by using either d.plaspy.com or the IP 54.85.159.138 as the GPRS server.
3. Set the server port to 8888 in the device configuration.
4. Choose UDP or TCP if the device requires explicit transport selection and save the choice.
5. Configure APN and credentials needed for mobile data, then apply or save the configuration.
6. Restart or power cycle the device if required by the manufacturer to apply changes.
7. Validate that the device reports to Plaspy by checking platform visibility and recent position or event logs.

## Example Configuration Commands

The Gnxis 8-wire supports SMS based configuration. Below are the public SMS commands provided by the manufacturer example. Replace placeholders and send each command to the device phone number using an SMS tool or a mobile phone. The device default password in these commands is 123456. Use the commands in the order shown when order matters.

- Optional initial factory reset (use only when needed)
```text
begin123456
```

- Set time zone to UTC 0
```text
time zone123456 0
```

- Set the APN for the mobile operator
```text
apn123456 [apn]
```
Explanation: replace [apn] with your operator APN.

- Set APN username and password
```text
up123456 [apnu] [apnp]
```
Explanation: replace [apnu] with the APN username and [apnp] with the APN password. If no username or password is required, some operators accept blank values.

- Set the GPRS server to Plaspy using IP and port
```text
adminip123456 54.85.159.138 8888
```
This points the device directly to the Plaspy server IP and port. You can also use d.plaspy.com if the device supports domain names.

- Set update/reporting interval example
```text
fix060s060s***n123456
```
Explanation: this sample command sets a reporting pattern; follow manufacturer syntax for interval customization.

- Enable SOS button transmission
```text
SOSALM,ON,1#
```

- Switch to GPRS mode and set transport to UDP or initiate GPRS
```text
gprs123456,1,1
```
or
```text
gprs123456
```
Explanation: Use the transport form required by the specific Gnxis firmware. If your device asks for explicit transport selection, choose 1 for UDP or 0 for TCP where applicable per manufacturer guidance.

- Check current settings
```text
check123456
```
Explanation: This command requests the device to return current configuration parameters via SMS.

Note: The default device password is 123456 in these examples. Change the password after initial setup if the manufacturer provides a secure method to do so.

## Configuration Notes

- Firmware and hardware revisions may alter the exact SMS syntax or available commands; verify the command format with the device documentation for your specific firmware version.
- SMS based setup is useful for installers without direct access to a configuration tool, but a data connection and confirmed APN settings are required for Plaspy reporting.
- Choose UDP or TCP according to the device firmware options; both transports can be used with Plaspy but must match the device configuration.
- Plaspy uses the same port for all supported devices which simplifies server configuration; set port 8888 consistently.
- Preserve placeholders such as [apn], [apnu], and [apnp] when composing SMS commands and replace them with your operator values.

## Why Use Plaspy with This Configuration

Using the Gnxis 8-wire tracker with Plaspy gives fleet managers and vehicle owners a straightforward path to real time visibility and event monitoring. By pointing the device to the shared Plaspy server and confirming GPRS connectivity, you can centralize position, SOS, and alarm reporting for operational oversight and alerting.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Manufacturer specifications, setup methods, and firmware behavior can change over time; verify the latest device specific configuration details on the manufacturer official website.
