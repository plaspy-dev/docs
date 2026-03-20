---
slug: /cantrack/g01_g02/configuration
id: g01_g02-configuration
sidebar_label: Configuration
title: CanTrack - G01 / G02 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for connecting CanTrack G01 and G02 trackers to Plaspy using shared server settings and practical setup steps
keywords:
  - CanTrack G01 G02 configuration
  - CanTrack G01 setup
  - CanTrack G02 setup
  - CanTrack server configuration
  - CanTrack GPS tracker configuration
  - G01 G02 Plaspy setup
  - GPS tracker Plaspy configuration
  - vehicle tracking setup CanTrack
  - GPRS GPS tracker setup
  - CanTrack configuration guide
---

# CanTrack - G01 / G02 Configuration

This page documents the public configuration context for using the CanTrack G01 and G02 GPS trackers with Plaspy. It focuses on the practical steps and shared server settings needed to point the device to Plaspy for real time and GPRS based reporting, while summarizing the G01 and G02 capabilities such as GSM GPRS networking, real time tracking, history replay, geo fence and SOS alarm features from the device description.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side steps can vary by firmware, hardware revision, installation type, and vendor tools. Use this guide to prepare the tracker for Plaspy, and refer to the manufacturer documentation for device specific commands and firmware details.

## Configuration Overview

The goal of configuration is to prepare the CanTrack G01 or G02 to send location and event data reliably to Plaspy so the device becomes visible and manageable in the platform. This includes setting the correct server endpoint, transport, and saving the changes so the device reports via GPRS to Plaspy.

- Point the tracker to the Plaspy server endpoint so data reaches the platform
- Choose the transport protocol supported by the device and Plaspy
- Validate that the tracker has mobile network connectivity and can send to Plaspy
- Save and apply settings so the device can report in real time and for history trace
- Confirm visibility and correct reporting within Plaspy after the device registers

## Plaspy Server Settings

When configuring the CanTrack G01 or G02 for Plaspy, use the following public server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device configuration options
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A charged device or vehicle power connection so the tracker can boot and stay online
- An active SIM card with a data plan and SMS capability if you will configure or verify by SMS
- Access to the official CanTrack configuration method or software from the manufacturer
- Basic cellular coverage for GPRS transmission at the deployment location
- Access to a Plaspy account or administrator to validate that the device is visible after reporting
- Knowledge of the device IMEI and any installer credentials required by the manufacturer

## How This Tracker Connects to Plaspy

The CanTrack G01 and G02 send GPS and event data over the GSM GPRS network to Plaspy using TCP or UDP. Once configured with the Plaspy server endpoint and port, the device will transmit location updates and alarms so the unit appears in the Plaspy platform.

- Configure the device to report to d.plaspy.com or the IP 54.85.159.138
- Set the device to use port 8888 for reporting to Plaspy
- Select UDP or TCP depending on the device configuration options; Plaspy accepts both
- Plaspy automatically detects the tracker protocol so the platform recognizes the device stream
- After reporting, verify the device in Plaspy for live location and event reporting

## Common Configuration Workflow

1. Access the official CanTrack configuration method or software as provided by the manufacturer
2. Enter d.plaspy.com or 54.85.159.138 as the server address in the device settings
3. Set the server port to 8888 which Plaspy uses for all supported devices
4. Choose UDP or TCP if the device requires explicit transport selection
5. Apply or save the configuration on the tracker using the manufacturer tool or SMS commands
6. Restart the device if the manufacturer workflow requires a reboot for settings to take effect
7. Validate that the device successfully reports to Plaspy and appears in the platform dashboards

## Example Configuration Commands

The exact command syntax depends on CanTrack firmware and the configuration channel you use, for example manufacturer PC software, a mobile configuration app, or SMS commands. Because methods vary between firmware and vendor tools, consult the official CanTrack documentation for the precise commands for your device.

In general you will supply the Plaspy endpoint and port in the manufacturer tool or via SMS. Example placeholders you might see in manufacturer instructions could look like these conceptual forms:

- Set server by domain
  - d.plaspy.com port 8888 using TCP or UDP as required
- Set server by IP
  - 54.85.159.138 port 8888 using TCP or UDP as required

If your device uses SMS configuration with template placeholders the manufacturer documentation will explain how to replace values such as APN or user credentials. Keep placeholders such as {{apn}}, {{apnu}}, or {{apnp}} as shown by the vendor and substitute the values appropriate for your SIM card and carrier.

## Configuration Notes

- Firmware variations and hardware revisions may change the exact command syntax or menu locations for server setup
- In some markets the device is commonly configured by SMS while in others the manufacturer desktop or mobile tool is used; follow the method provided with your unit
- Choose UDP or TCP based on any instructions from your installer or the device manual; Plaspy accepts both and auto detects protocol
- Always save and apply settings and, if required, perform a reboot so the tracker begins reporting to Plaspy
- Verify device IMEI reporting and any required trackers list in Plaspy after initial configuration

## Why Use Plaspy with This Configuration

Configuring the CanTrack G01 or G02 to report to Plaspy gives you a straightforward path to real time location visibility, event alerts such as geo fence and SOS, and the ability to replay historical routes captured by the tracker. Using the shared Plaspy server settings simplifies deployment because the platform uses the same port for all supported devices and automatically detects the tracker protocol.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the latest device specific configuration commands, firmware notes, and installation guidance consult the manufacturer site at https://www.cantrackgps.com/ since device behavior and setup methods can change over time.
