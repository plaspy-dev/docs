---
slug: /tk_star/tk103/configuration
id: tk103-configuration
sidebar_label: Configuration
title: TK-Star - TK103 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TK-Star TK103 to connect with Plaspy using shared server settings and SMS commands
keywords:
  - TK-Star TK103 configuration
  - TK103 setup Plaspy
  - TK-Star GPS tracker configuration
  - TK103 server configuration
  - TK103 SMS commands
  - GPS tracker configuration
  - vehicle tracking setup
  - fleet management tracker setup
  - GPRS tracker configuration
  - TK103 APN settings
---

# TK-Star - TK103 Configuration

This page covers the public configuration context for using the TK-Star TK103 tracker with Plaspy. It explains the shared server settings Plaspy requires and how to apply publicly documented TK103 configuration commands so the device can report to the Plaspy platform. Use this guide to understand the practical steps needed to prepare the tracker for communication with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The TK103 can be configured by SMS commands (documented below) or using manufacturer software, so follow manufacturer guidance when available and confirm details for your specific unit before deploying.

## Configuration Overview

This configuration process prepares a TK103 unit to send position and status data to the Plaspy platform using Plaspy's shared server endpoint and port. The practical objective is to configure network access, point the tracker at the Plaspy endpoint, confirm transport settings, and verify the device is visible in Plaspy.

- Configure the TK103 to use a valid mobile data APN and, if required, APN credentials.
- Point the tracker to the Plaspy server endpoint so it reports to Plaspy at d.plaspy.com or the Plaspy server IP.
- Set the reporting/upload interval so the tracker sends periodic updates to Plaspy.
- Choose UDP or TCP as the transport if the device requires a transport selection.
- Verify the device registers and begins sending location updates to Plaspy on port 8888.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: device may be configured to use UDP or TCP on port 8888
- Protocol detection: Plaspy automatically detects the tracker protocol and uses the same port for all devices

## Typical Requirements Before Setup

- A powered TK103 unit installed or accessible for configuration.
- A SIM card with active data and SMS capability inserted in the tracker and able to reach the mobile operator APN.
- Knowledge of the device password; the example commands below use the TK103 default password 123456.
- Access to the manufacturer configuration method you prefer such as SMS command interface or official configuration tools.
- A plan to test connectivity and confirm the device appears in Plaspy after configuration.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the TK103 sends its GPS and device status over the mobile network to the Plaspy server endpoint and port. Plaspy receives the incoming device messages and automatically determines the correct protocol so no additional protocol selection is required on the platform side.

- The tracker is configured to report to the shared Plaspy server endpoint d.plaspy.com or directly to the IP 54.85.159.138.
- All device messages are sent to port 8888 on the Plaspy endpoint.
- The tracker uses GPRS data to deliver periodic position updates and event messages.
- Plaspy automatically detects the tracker protocol and processes incoming telemetry for visibility in the platform.
- Once reporting is active, the device becomes visible for location tracking and operational monitoring within Plaspy.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software (for TK103 this frequently means sending SMS commands or using vendor tools).
2. Configure the device APN and any APN credentials needed for GPRS connectivity.
3. Enter the Plaspy server address using either d.plaspy.com or 54.85.159.138.
4. Set the server port to 8888.
5. Choose UDP or TCP if the device requires an explicit transport selection.
6. Apply or save the configuration and restart the device if the device or vendor instructions require a reboot.
7. Validate that the device reports to Plaspy by confirming visibility and incoming data on the platform.

## Example Configuration Commands

The TK103 can be configured by SMS using the device password. The sample commands below use the default password 123456. Preserve placeholders where shown.

1. Optional initial factory restore (only if you need to reset device to factory defaults):
```
begin123456
```
2. Set the operator APN (replace {{apn}} with your mobile operator APN):
```
apn123456 {{apn}}
```
3. Set the APN username if your operator requires one (replace {{apnu}} with the APN username):
```
apnuser123456 {{apnu}}
```
4. Set the APN password if required (replace {{apnp}} with the APN password):
```
apnpasswd123456 {{apnp}}
```
5. Set the GPRS server to Plaspy using the Plaspy server IP and port (this points the device to Plaspy on port 8888):
```
adminip123456 54.85.159.138 8888
```
6. Set the upload interval to 60 seconds (adjust as needed for your use case):
```
upload123456 60
```
7. Switch the device to GPRS mode so it uses mobile data for reporting:
```
gprs123456
```

Notes about placeholders:
- {{apn}} is the operator Access Point Name required for mobile data.
- {{apnu}} is the APN username, used only if your operator requires authentication.
- {{apnp}} is the APN password, used only if your operator requires authentication.
- Maintain the device password (123456 in the example) when sending configuration SMS unless you have changed it.

## Configuration Notes

- Firmware and hardware revisions can change command syntax and behavior; confirm the exact commands and responses for your TK103 firmware.
- The TK103 supports SMS-based configuration as shown here; some installers prefer manufacturer software or USB configuration tools where available.
- Choose UDP or TCP based on installer preference or device capability; Plaspy accepts either on port 8888 and auto-detects the protocol.
- When using the adminip command, you may supply either the Plaspy server domain or the IP; the example uses the Plaspy server IP to avoid DNS dependence.
- After changing server settings or APN, allow time for the device to register on the mobile network and begin reporting.

## Why Use Plaspy with This Configuration

Configuring the TK-Star TK103 to report to Plaspy provides a straightforward path to centralized vehicle location, event alerts, and operational oversight. Using Plaspy's shared server endpoint and automatic protocol detection reduces per-device platform setup work and lets organizations focus on deployment, monitoring, and operational policies.

To learn more about Plaspy and how it supports fleet visibility, visit https://www.plaspy.com. For up to date device specific instructions, firmware notes, and manufacturer documentation verify details at the TK-Star website https://www.tk-star.com/ as device setup methods and firmware behavior can change over time.
