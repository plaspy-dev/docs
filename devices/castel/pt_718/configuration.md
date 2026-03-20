---
slug: /castel/pt_718/configuration
id: pt_718-configuration
sidebar_label: Configuration
title: Castel - PT-718 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for Castel PT 718 and Plaspy compatibility with practical steps and example SMS commands
keywords:
  - Castel PT 718 configuration
  - Castel PT 718 setup
  - PT 718 server configuration
  - PT 718 Plaspy setup
  - Plaspy tracker configuration
  - GPS tracker configuration guide
  - personal tracker setup
  - GPRS tracker configuration
  - SMS configuration commands
  - vehicle and personal tracking
---

# Castel - PT-718 Configuration

This page covers the public configuration context for using the Castel PT-718 tracker with Plaspy. It explains the practical, published settings required for the device to report to the Plaspy platform and provides example SMS configuration commands that are commonly used for this model.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so use these instructions as a practical guide while confirming any device specific differences with Castel documentation.

## Configuration Overview

The goal of configuration is to prepare a PT-718 so it can communicate reliably with the Plaspy platform, using the public Plaspy server endpoint and port. The procedure focuses on establishing GPRS connectivity or SMS-based settings, pointing the device to the Plaspy server, and validating that the tracker is visible in the platform.

- Configure the device network settings and APN so the PT-718 can use GPRS to send location data.
- Point the tracker to the Plaspy server endpoint so reporting arrives in your Plaspy account.
- Choose UDP or TCP transport on port 8888 if the device requires explicit transport selection.
- Validate settings with a device status query or by confirming the tracker appears in Plaspy.
- Use SMS commands when applicable for quick, field friendly configuration without extra tools.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

These values are the public Plaspy endpoint settings used for PT-718 devices configured to report by GPRS. All devices in Plaspy use the same port and the platform will auto detect the tracker protocol.

## Typical Requirements Before Setup

- A charged PT-718 with a functioning SIM card that has data enabled if using GPRS reporting.
- Knowledge of the device ID so you can derive the SMS secret key if needed.
- Access to the manufacturer configuration method such as SMS commands or vendor configuration software.
- Basic APN details from the mobile operator for GPRS connectivity.
- A method to send and receive SMS to the device if you will use SMS based configuration or verification.

## How This Tracker Connects to Plaspy

The PT-718 sends position and status updates to the shared Plaspy server endpoint using GPRS once the APN and server settings are correctly applied. Plaspy receives the device data on port 8888 and automatically determines the proper protocol for that tracker.

- The device is configured with the Plaspy server hostname or IP and port so outbound reports reach d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be set to UDP or TCP depending on device configuration options.
- Plaspy auto detects the tracker protocol so the same port works across supported models.
- Once reporting starts, device location, alerts, and status messages become visible in the Plaspy platform.
- Periodic position reports and event messages are forwarded to Plaspy for monitoring and historical playback.

## Common Configuration Workflow

1. Access the official Castel configuration method for PT-718 such as SMS commands or the vendor tool recommended by the manufacturer.
2. Enter the Plaspy server by hostname or IP, using either d.plaspy.com or 54.85.159.138 as required by your configuration interface.
3. Set the port to 8888 in the tracker configuration.
4. Choose UDP or TCP if the device requires transport selection during setup.
5. Apply or save the configuration on the device using the official method.
6. Restart the device if the firmware requires reboot to apply network or server changes.
7. Validate that the device reports to Plaspy by checking device status with a verification command or confirming visibility in the Plaspy platform.

If you use SMS to set parameters in the field, follow Castel SMS command formatting and replace placeholders with your actual values as shown in the examples below.

## Example Configuration Commands

The PT-718 supports SMS configuration. The device expects a secret key for SMS commands. The factory default secret key for SMS instructions is the last 6 ASCII characters of the device ID.

1) Set APN settings and the Plaspy server IP and port
```
*{{SecretKey}}#set gprs#[apn],[apnu],[apnp],54.85.159.138,8888*
```
- {{SecretKey}} is the device SMS password. By default it is the last 6 ASCII characters of the device ID.
- [apn] is the operator APN name.
- [apnu] is the APN username if required by the operator; leave empty if none.
- [apnp] is the APN password if required; leave empty if none.
- This command sets APN and configures the device to report to Plaspy at 54.85.159.138 on port 8888.

2) Verify current GPRS settings on the device
```
*{{SecretKey}}#get gprs#*
```
- Use this query to confirm the APN and server settings after applying configuration.

Send these commands as SMS messages to the PT-718. Replace placeholders with actual values. If your device requires the hostname instead of IP, some firmware versions accept d.plaspy.com in place of the IP; consult your device firmware notes.

## Configuration Notes

- SMS based configuration is supported for PT-718 and can be convenient for field setup without extra software.
- The secret key default is the last 6 ASCII characters of the device ID; if the password has been changed, use the current password.
- Firmware and vendor tool behavior can vary by hardware revision and software version; commands and accepted formats may differ.
- Choose UDP or TCP according to device options. Both transports are supported by Plaspy on port 8888.
- Always confirm APN credentials with your mobile operator and test connectivity after applying settings.

## Why Use Plaspy with This Configuration

Using the Castel PT-718 with Plaspy provides a straightforward path to real time location visibility and event monitoring without changing the core device hardware. Pointing the PT-718 to the Plaspy server and port ensures that position reports and alerts are delivered to a single platform that automatically handles protocol detection and device handling.

To learn more about Plaspy visit https://www.plaspy.com. Note that device specific configuration methods, firmware behavior, and manufacturer details can change over time so verify the latest setup instructions with Castel at http://www.castelecom.com/ before performing large scale deployments.
