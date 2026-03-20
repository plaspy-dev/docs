---
slug: /xirgo/xt62/configuration
id: xt62-configuration
sidebar_label: Configuration
title: Xirgo - XT62 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Xirgo XT62 showing Plaspy server settings, SMS commands, and a practical setup workflow
keywords:
  - Xirgo XT62 configuration
  - XT62 setup Plaspy
  - Xirgo tracker configuration
  - XT62 server configuration
  - XT62 GPS tracker setup
  - Plaspy device configuration
  - cold chain asset tracker
  - reefer tracker XT62
  - XT62 SMS commands
  - fleet tracking configuration
---

# Xirgo - XT62 Configuration

This page documents the public configuration context for using the Xirgo XT62 asset tracker with Plaspy. It gathers the practical server settings, SMS commands provided in public materials, and a step by step workflow to prepare the device to report location and condition telemetry into Plaspy for unified visibility.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The XT62 example below includes the SMS commands commonly published for APN and GPRS server configuration; treat those as a public example and verify exact syntax with Xirgo documentation or vendor instructions.

## Configuration Overview

The configuration process prepares the XT62 to communicate with Plaspy and to report location plus cold chain telemetry such as temperature and door events. The goal is to configure the device APN and server target, validate connectivity, and confirm the tracker is visible in the Plaspy platform.

- Configure the device APN so the cellular link can register on the mobile network and send data.
- Point the device to Plaspy server settings so telemetry is forwarded to Plaspy for mapping and alerts.
- Validate transport settings and connectivity to ensure timely reporting of location and sensor events.
- Save and apply configuration then confirm the device appears and reports data in Plaspy.
- Use the public SMS commands below when SMS configuration is supported by the device or vendor tools.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; configure the device for either transport if required
- Plaspy automatically detects the tracker protocol so all devices can use the same Plaspy port

## Typical Requirements Before Setup

- Device powered and installed according to manufacturer installation guidelines
- Active SIM card with a data plan and correct APN settings for the mobile operator
- Ability to send SMS to the device phone number if SMS configuration is required
- Access to official Xirgo configuration method or software from the vendor or installer
- Plaspy account or platform access to verify the device appears and to monitor initial reports
- Knowledge of the operator APN, username, and password for the SIM if applicable

## How This Tracker Connects to Plaspy

The XT62 is configured to send its telemetry and event reports to the shared Plaspy server endpoint and port so data is available in the Plaspy platform for mapping, alerts, and reporting. Plaspy receives device traffic on a common port and identifies the tracker protocol automatically.

- The device sends location and sensor telemetry to d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy accepts either UDP or TCP transport from the tracker and performs automatic protocol detection.
- Telemetry sent to Plaspy becomes available for real time mapping, alerts, and consolidated reporting.
- Event notifications from temperature excursions and door openings are forwarded to Plaspy for rule based handling.
- Operational monitoring in Plaspy lets users confirm the device is online and receiving sensor data.

## Common Configuration Workflow

1. Access the official Xirgo configuration method or vendor supplied software and documentation for the XT62.
2. Configure the device APN settings for the installed SIM using the operator APN, username, and password if required.
3. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 in the server or GPRS server field.
4. Set the server port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration using the device tool, SMS commands, or vendor provisioning system.
6. Restart or power cycle the device if required by the firmware to activate new settings.
7. Validate the device reports to Plaspy by confirming presence and telemetry in the Plaspy platform.

## Example Configuration Commands

The XT62 supports SMS configuration in published public materials. The commands below are shown in the order they are typically applied. Send these SMS messages to the device phone number using the standard SMS configuration method for your vendor or installer.

- Set the operator APN (replace placeholders with your operator values)

```
+XT:1002,[apnu],[apnp],[apn]
```

- Set the GPRS server to Plaspy using the Plaspy server IP and port 8888

```
+XT:1001,8888,54.85.159.138,4,0,0
```

Notes on placeholders and command usage:
- [apn] is the operator APN string required for data access.
- [apnu] is the APN username when required by the operator.
- [apnp] is the APN password when required by the operator.
- Send the APN command before the GPRS server command so the device can establish a data session.
- These commands are public examples and may vary by firmware. Confirm exact syntax with Xirgo documentation.

## Configuration Notes

- Firmware differences or vendor provisioning tools can change available SMS commands or required parameters; always confirm with the latest Xirgo documentation.
- The XT62 can be configured via SMS commands in public materials, or via manufacturer tools when available; follow the provisioning method recommended by your installer.
- Choosing UDP or TCP affects transport behavior; Plaspy accepts either and performs protocol detection on port 8888.
- If you use the Plaspy server domain instead of the IP, enter d.plaspy.com where server name is required; the IP 54.85.159.138 is provided as an alternate public endpoint.
- After applying configuration, allow a brief time for the device to register on the mobile network and start sending telemetry.

## Why Use Plaspy with This Configuration

Using the XT62 with Plaspy brings refrigerated asset telemetry and location together for unified operational oversight. Plaspy consolidates XT62 temperature, door, and I/O signals with location reporting so teams can monitor cold chain conditions, receive excursion alerts, and maintain audit trails for compliance and incident response.

To learn more about Plaspy and supported configurations visit https://www.plaspy.com. Manufacturer specifications and setup commands can change, so verify the latest device specific configuration and firmware details on the official Xirgo site https://xirgo.com/.
