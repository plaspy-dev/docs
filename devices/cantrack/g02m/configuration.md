---
slug: /cantrack/g02m/configuration
id: g02m-configuration
sidebar_label: Configuration
title: CanTrack - G02M Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for CanTrack G02M with Plaspy including required server settings and practical setup steps
keywords:
  - CanTrack G02M configuration
  - CanTrack G02M setup
  - CanTrack G02M Plaspy
  - CanTrack GPS tracker configuration
  - G02M server configuration
  - vehicle tracker setup
  - G02M GPRS configuration
  - CanTrack APN settings
  - G02M tracking software configuration
  - Plaspy tracker configuration
---

# CanTrack - G02M Configuration

This page documents the public configuration context for using the CanTrack G02M with Plaspy. It focuses on the practical server settings and the general steps required to point a G02M tracker to Plaspy so the device can transmit location data for real time tracking and event visibility in the platform.

Plaspy uses a shared server endpoint and common transport settings across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer side steps to configure the G02M can vary by firmware version, hardware revision, installation type, or vendor tools, so this page provides practical guidance while recommending you verify device specific commands with CanTrack documentation.

## Configuration Overview

The goal of configuration is to prepare the G02M so it reliably sends GPS and status data to Plaspy over the internet. This typically means setting the device network parameters, verifying SIM and APN settings when using GPRS, and registering the correct Plaspy server endpoint and transport so the platform can accept and interpret the incoming messages.

- Point the G02M to the Plaspy server endpoint so GPRS uploads go to the correct destination
- Set the transport and port used by Plaspy so the device can open a socket to the platform
- Confirm APN, SIM, and power so the tracker has mobile data available for GPRS uploads
- Validate connectivity and watch for the first position reports in Plaspy
- Keep manufacturer configuration references nearby as firmware or SMS command sets can differ

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the G02M. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol when a device connects.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol so select UDP or TCP on the device if required

## Typical Requirements Before Setup

- A powered and accessible G02M tracker with sufficient battery charge or dock connection
- An active SIM card with mobile data enabled and the correct APN configured for GPRS uploads
- Access to the official CanTrack configuration method such as SMS command set or vendor configuration tool
- A smartphone or PC to send SMS commands or run the manufacturer configuration software
- A Plaspy platform account or access so you can confirm the device appears and reports after configuration

## How This Tracker Connects to Plaspy

When configured for GPRS uploads, the G02M transmits GPS and status messages over the mobile network to the Plaspy server endpoint on the shared port. Plaspy receives the incoming connection, automatically determines the tracker protocol, and displays the device data in the platform for real time monitoring and alerts.

- The device sends GPRS packets to d.plaspy.com or 54.85.159.138 on port 8888
- You can choose UDP or TCP on the G02M if the device requires explicit transport selection
- Plaspy matches incoming connections to the tracker protocol automatically
- Once the first valid packet is received the device should appear in Plaspy for tracking and reporting
- Regular interval uploads and event alarms will be relayed to Plaspy for operational monitoring

## Common Configuration Workflow

1. Access the official CanTrack configuration method such as the SMS command set or the manufacturer configuration software.
2. Enter the Plaspy endpoint by setting the server to d.plaspy.com or the server IP 54.85.159.138 in the device configuration.
3. Set the communication port to 8888 as Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP if the G02M requires a transport selection during configuration.
5. Configure the device APN and ensure the SIM has mobile data so GPRS uploads can be sent.
6. Apply or save the configuration and restart the device if required by the manufacturer instructions.
7. Validate that the device reports to Plaspy by watching for the first location packet in the Plaspy platform.

## Example Configuration Commands

The G02M supports SMS and software based configuration methods provided by CanTrack. Exact SMS commands and tool actions depend on firmware and the vendor toolchain, so the specific command set can vary. If you use SMS commands or a configuration utility from CanTrack, follow the manufacturer guide to set the following values:

- Server domain or IP to d.plaspy.com or 54.85.159.138
- Port to 8888
- Transport to UDP or TCP if required
- APN settings according to your mobile operator

Because manufacturer commands differ by firmware, consult the CanTrack G02M manual for the exact command syntax or the configuration tool interface. If you have a command list from the manufacturer, apply the commands in the order recommended by CanTrack and verify the device restart behavior if the tool requires it.

## Configuration Notes

- Firmware and hardware revisions may change the required SMS command syntax or GUI options; always check the device manual for your specific firmware.
- If your configuration method offers both UDP and TCP, choose the one recommended by your installation or network conditions; Plaspy will accept either on port 8888.
- APN, username, and password placeholders are vendor specific; supply your mobile operator APN values when prompted by the device.
- SMS based configuration is commonly supported on CanTrack devices but the exact phrasing and parameters can vary with firmware.
- Keep a test device workflow to validate connectivity before wide scale deployment.

## Why Use Plaspy with This Configuration

Using the CanTrack G02M with Plaspy gives organizations a straightforward way to collect real time location data and operate geofencing, alerts, and historical playback from a single platform. The shared Plaspy server settings and automatic protocol detection minimize per device configuration complexity and help get devices visible in the platform quickly.

To learn more about Plaspy and view platform features visit https://www.plaspy.com. For the most current device specific commands, firmware notes, and detailed G02M manuals check the CanTrack site at https://www.cantrackgps.com/ as manufacturer setup methods and firmware behavior can change over time.
