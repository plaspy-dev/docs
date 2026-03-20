---
slug: /queclink/gl500mg/configuration
id: gl500mg-configuration
sidebar_label: Configuration
title: QuecLink - GL500MG Configuration
sidebar_class_name: menu_item_tracker
description: Public guide for configuring QuecLink GL500MG to connect with Plaspy using server settings and example SMS commands
keywords:
  - QuecLink GL500MG configuration
  - QuecLink GL500MG setup
  - QuecLink GL500MG Plaspy
  - GL500MG server configuration
  - GL500MG GPS tracker setup
  - QuecLink tracker configuration
  - asset tracker configuration guide
  - GPS platform setup Plaspy
  - LTE M tracker configuration
  - device configuration QuecLink
---

# QuecLink - GL500MG Configuration

This page covers the public configuration context for using the QuecLink GL500MG with Plaspy. It collects the key server settings, practical workflow steps, and example SMS configuration commands that are publicly available for preparing the device to report to the Plaspy platform. The content is intended for technical users who need to connect GL500MG units to Plaspy for asset tracking and monitoring.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, so the same port and endpoint are used for all devices on the platform. Exact manufacturer side setup steps can vary by firmware revision, hardware variant, installation type, and vendor tools. This page includes QuecLink SMS command examples where available and explains required values such as APN placeholders and server entries.

## Configuration Overview

Preparing a GL500MG for Plaspy means configuring the device so it can establish a GPRS connection and deliver its telemetry to Plaspy's shared server endpoint. The sample SMS commands below demonstrate the typical public steps: reset or prepare the device, set APN credentials, configure the Plaspy server, and set reporting frequency or inputs.

- Configure the device to use Plaspy server settings so messages reach Plaspy for real time mapping and history.
- Provide APN and network details so the GL500MG can open a GPRS session for TCP or UDP transport.
- Set reporting intervals and event inputs to control how often location and sensor telemetry are sent.
- Validate device connectivity and confirm messages arrive in Plaspy using a device manager or platform logs.
- Keep manufacturer documentation handy for firmware specific syntax and any optional parameters.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices use the same port for platform ingestion

## Typical Requirements Before Setup

- A powered and SIM equipped GL500MG with sufficient battery or external power during initial configuration.
- An active data plan and APN credentials for the SIM card to enable GPRS connectivity.
- Access to the device configuration method supported by the unit such as SMS commands or the manufacturer configuration tool.
- Knowledge of the device password if required for configuration; the public examples below use the default password queclink where indicated.
- A Plaspy account or device manager access to confirm that the device is reporting to the platform after setup.
- Confirmation of firmware version or hardware revision if you plan to use advanced features that may differ between revisions.

## How This Tracker Connects to Plaspy

The GL500MG reports location and sensor telemetry to Plaspy by sending messages to Plaspy's shared server endpoint and port. Plaspy ingests the device protocol messages and presents them in mapping, alerting, and history features. Commonly this is done by configuring the device with the Plaspy domain or IP and selecting TCP or UDP transport.

- The device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport may be selected as UDP or TCP depending on device settings and network conditions.
- Plaspy automatically detects the tracker protocol when messages arrive to the shared port used by all devices.
- Location updates, motion events, and configured sensor inputs are transmitted to Plaspy for real time visibility.
- Buffered messages and periodic reporting help ensure data delivery if temporary connectivity interruptions occur.

## Common Configuration Workflow

1. Access the official QuecLink configuration method for the GL500MG such as documented SMS commands or the manufacturer configuration tool.
2. Prepare APN credentials and confirm the SIM card has data enabled and can register on the cellular network.
3. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
4. Set the port to 8888 and choose UDP or TCP transport if the device requires explicit transport selection.
5. Apply or save the configuration on the device and send any required SMS or configuration batch commands.
6. Restart or power cycle the device if required by the manufacturer to apply network server settings.
7. Validate that the device reports to Plaspy by checking platform device status, incoming message logs, or the device manager in Plaspy.

## Example Configuration Commands

The public QuecLink SMS commands below are sample commands used to configure the GL500MG. These commands use the device password queclink in the examples and include APN placeholders that must be replaced with your carrier credentials. Preserve the order when applying commands as some steps are preparatory.

- Optional initial factory restore command
  ```
  AT+GTRTO=queclink,4,,,,,,FFFF$
  ```
  Note: This command restores factory settings and is optional. Only use if you intend to reset the device.

- Set the time zone to UTC 0
  ```
  AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
  ```

- Set the operator APN
  ```
  AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
  ```
  Replace the placeholders with your SIM operator values:
  - [apn] is the APN name
  - [apnu] is the APN username if required
  - [apnp] is the APN password if required

- Set the GPRS server to Plaspy using both domain and IP and port 8888
  ```
  AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
  ```
  This command configures the device to report to Plaspy's server domain and IP on port 8888. Plaspy accepts UDP or TCP on this port and automatically detects the tracker protocol.

- Set the update interval to 60 seconds
  ```
  AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
  ```

- Enable SOS button notification input 2
  ```
  AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
  ```

If you use the SMS method, send each command as a separate SMS to the device number. Confirm responses from the device where possible and verify reporting on Plaspy after configuration.

## Configuration Notes

- The exact SMS syntax and available parameters can vary with firmware version and hardware revision; verify the command set against the device firmware you have.
- Choose UDP or TCP depending on your network reliability and any tunneling or firewall requirements; Plaspy accepts either on the shared port and will detect the protocol automatically.
- The example commands use the public default password queclink; change default passwords where appropriate for security and follow manufacturer guidance for password updates.
- SMS based configuration is shown here because it is present in public examples; QuecLink configuration tools or wired interfaces may also be available for batch programming.
- Always validate that messages reach Plaspy after configuration by checking device status and incoming message logs on the Plaspy platform.

## Why Use Plaspy with This Configuration

Using the GL500MG with Plaspy provides an efficient way to convert long life asset telemetry into actionable visibility. The GL500MG's low power operation and onboard sensors make it well suited for deployments where infrequent but reliable reporting is required. When configured to report to Plaspy's shared server endpoint and port, teams gain centralized mapping, event alerts, and historical playback for monitoring asset movement and environmental conditions.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Device specific setup methods, firmware behavior, and manufacturer details can change over time so please verify the latest configuration instructions and firmware guidance on the QuecLink website https://www.queclink.com/ before finalizing deployments.
