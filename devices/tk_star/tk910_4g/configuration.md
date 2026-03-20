---
slug: /tk_star/tk910_4g/configuration
id: tk910_4g-configuration
sidebar_label: Configuration
title: TK-Star - TK910 4G Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TK-Star TK910 4G with Plaspy server settings and SMS setup commands
keywords:
  - TK-Star TK910 4G configuration
  - TK910 4G setup for Plaspy
  - TK-Star GPS tracker configuration
  - TK910 4G server configuration
  - Plaspy device configuration
  - vehicle GPS tracker setup
  - fleet tracking configuration
  - TK-Star tracker Plaspy compatibility
  - TK910 4G SMS setup
  - TK910 4G APN configuration
---

# TK-Star - TK910 4G Configuration

This page covers the public configuration context for using the TK-Star TK910 4G with the Plaspy platform. It summarizes the practical server settings and setup workflow you will commonly use when integrating this model with Plaspy, and it includes the SMS commands provided by the device manufacturer for on device configuration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. Where manufacturer commands are available we include them here; always check the official TK‑Star documentation for the latest device specific instructions.

## Configuration Overview

The configuration process prepares the TK910 4G to communicate reliably with Plaspy by setting APN and server details, choosing the preferred transport, and validating connectivity. The goal is to ensure the device reports location and event telemetry to Plaspy so the unit appears in your platform dashboards and triggers alerts as expected.

- Set the device APN and credentials so cellular data can reach the internet.
- Configure the device to report to Plaspy using the shared server endpoint and port.
- Choose transport settings such as UDP or TCP if the tracker requires a selection.
- Apply reporting intervals and GPRS mode so the tracker transmits regular location updates.
- Validate the device is visible in Plaspy and that location and event updates are received.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

These settings are the public Plaspy endpoint values used to point the TK910 4G at the Plaspy ingestion service. Plaspy uses the same port for all supported devices and will attempt to detect the device protocol automatically.

## Typical Requirements Before Setup

- A powered and installed TK910 4G with access to the device SMS or manufacturer configuration tool
- An active cellular SIM with a data plan and correct APN settings for your operator
- The device default password if required for SMS configuration, typically 123456 in the provided manufacturer commands
- Knowledge of whether you will use UDP or TCP transport for the device if the tracker requires a transport selection
- Access to the official TK‑Star manual or vendor support for firmware specific instructions
- A Plaspy account or deployment where you can confirm the device is reporting after configuration

## How This Tracker Connects to Plaspy

The TK910 4G sends GNSS and assisted positioning telemetry to a configured server endpoint so Plaspy can ingest location, event, and alarm data. Once configured to point at Plaspy, the tracker will transmit updates at the configured interval and Plaspy will present live location, alerts, and historical playback.

- The tracker is set to report to the shared Plaspy server endpoint and port described above
- Telemetry and event messages are delivered over the chosen transport protocol UDP or TCP
- Plaspy receives location updates, geofence events, overspeed and vibration alerts for operator notification
- Platform visibility is validated when the device appears and sends regular uploads to Plaspy
- Plaspy correlates received telemetry with platform features such as alerts, maps, and route history

## Common Configuration Workflow

1. Access the official TK‑Star configuration method for your device, for example SMS commands or the manufacturer configuration tool or app.
2. Provide the device APN settings for your cellular operator so the tracker can use mobile data.
3. Enter the Plaspy server address either as the domain d.plaspy.com or the server IP 54.85.159.138.
4. Set the server port to 8888 in the device configuration.
5. Choose UDP or TCP if the device requires a transport selection.
6. Apply or save the configuration and switch the device to GPRS data mode if required.
7. Restart the device if the firmware or installer instructions recommend it.
8. Validate that the device reports to Plaspy and that location and event telemetry appear in your Plaspy deployment.

If you are using the SMS command flow shown below, send commands in the order listed and confirm each response where the device replies by SMS.

## Example Configuration Commands

The TK‑Star manufacturer provides an SMS based command set for configuring the TK910 4G. The commands below use the device default password 123456 where required. Keep placeholders as shown and replace them with your operator APN, APN username, and APN password as needed.

- Optional initial step to restore factory settings
```text
begin123456
```
- Set the operator APN
```text
apn123456 {{apn}}
```
- Set the APN username if required by your operator
```text
apnuser123456 {{apnu}}
```
- Set the APN password if required by your operator
```text
apnpasswd123456 {{apnp}}
```
- Set the GPRS server to the Plaspy IP and port
```text
adminip123456 54.85.159.138 8888
```
- Set the upload interval to 60 seconds
```text
upload123456 60
```
- Switch the device to GPRS mode
```text
gprs123456
```

Notes on the placeholders
- {{apn}} is your cellular operator APN string
- {{apnu}} is the APN username when required by the operator
- {{apnp}} is the APN password when required by the operator

These SMS commands reflect the public manufacturer examples. Keep the command order when required by the device, and change the default password after initial setup if supported by your deployment policies.

## Configuration Notes

- Firmware and hardware revisions can change available commands and behavior. Verify any command syntax with the TK‑Star documentation for your exact model and firmware.
- The device supports configuring the server by IP as shown. Many installers also accept a server domain, and Plaspy can be referenced as d.plaspy.com in platform or tool interfaces.
- Choose UDP or TCP based on installer preference and any transport requirements; Plaspy accepts either on port 8888 and detects the protocol automatically.
- SMS based setup is a common public method for TK910 4G configuration; use the manufacturer tool if provided for bulk or remote configuration.
- Remember to replace placeholders such as {{apn}}, {{apnu}}, and {{apnp}} with your actual operator values when sending commands.

## Why Use Plaspy with This Configuration

Using the TK‑Star TK910 4G with Plaspy gives organizations real time visibility into vehicle location, alerts, and historical routes. The device's assisted GNSS and multi connectivity options make it practical for tracking motorcycles, cars, and light equipment while Plaspy centralizes telemetry, notifications, and playback for operational monitoring and incident response.

To learn more about Plaspy and how this configuration fits within the platform visit https://www.plaspy.com. For the most current device specific instructions, firmware notes, and command syntax verify details on the manufacturer website https://www.tk-star.com/ before deploying at scale.
