---
slug: /gotop/tk_120/configuration
id: tk_120-configuration
sidebar_label: Configuration
title: GOTOP - TK-120 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GOTOP TK-120 with Plaspy including server settings setup and practical workflow for GPRS and SMS tracking
keywords:
  - GOTOP TK-120 configuration
  - GOTOP TK-120 setup
  - GOTOP TK-120 Plaspy
  - GOTOP GPS tracker configuration
  - TK-120 server configuration
  - TK-120 GPRS setup
  - GOTOP tracker setup
  - TK-120 vehicle tracking
  - TK-120 asset tracker
  - Plaspy device configuration
---

# GOTOP - TK-120 Configuration

This page covers the public configuration context for using the GOTOP TK-120 with the Plaspy platform. It explains how the tracker can be prepared to report location data to Plaspy over GPRS and how its SMS reporting features relate to platform visibility. The TK-120 is a compact GPS tracker that uses the GSM network and GPS satellites, supports SMS location replies with Google Maps links, and can transmit position data to tracking software using GPRS.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. Exact manufacturer-side configuration steps can vary by firmware version, hardware revision, installation type, and vendor tools, so this page focuses on the public Plaspy settings and a practical workflow for applying them to the TK-120.

## Configuration Overview

The goal of this configuration is to prepare the TK-120 so it can communicate reliably with Plaspy and become visible in the platform for live monitoring and event reporting. The process typically involves placing correct network settings on the device, choosing the transport protocol, and validating that Plaspy receives data.

- Configure the TK-120 to use Plaspy as its reporting endpoint so GPRS position packets are delivered to the platform.
- Select the appropriate transport method and ensure the device is set to use port 8888 for reporting.
- Verify network connectivity and APN or SIM data settings so the tracker can access the mobile data network.
- Validate device reporting in Plaspy and confirm location points appear on the platform.
- Keep a copy of the device settings and note firmware version for future troubleshooting.

## Plaspy Server Settings

Use the following public Plaspy settings when configuring the TK-120 to report position data to Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; configure the tracker for either UDP or TCP if required
- Plaspy automatically detects the tracker protocol when the device connects

Note that all devices in Plaspy use the same port, so port 8888 is the standard port to apply for the TK-120 when reporting to Plaspy.

## Typical Requirements Before Setup

- A powered TK-120 with working battery and proper installation in the vehicle or asset.
- An active SIM card with mobile data enabled and the correct APN for your mobile operator.
- Access to the GOTOP TK-120 configuration method, such as SMS command interface or the official configuration tool or manual.
- Knowledge of the Plaspy server settings (d.plaspy.com or 54.85.159.138 and port 8888) and whether your deployment prefers UDP or TCP.
- A device that can send and receive SMS for initial setup confirmations if using SMS-based configuration.
- Access to Plaspy to verify the device appears and transmits location data after configuration.

## How This Tracker Connects to Plaspy

The TK-120 can be set to send location updates over GPRS to the Plaspy server endpoint and port. When configured correctly, the tracker transmits regular position packets to Plaspy where the platform parses the incoming data and makes the device visible to users.

- The tracker reports position and movement data to the shared Plaspy server endpoint d.plaspy.com or 54.85.159.138 on port 8888.
- You can configure the device to use UDP or TCP on port 8888 depending on the device settings and network environment.
- Plaspy automatically detects the tracker protocol when packets arrive, so the platform selects the correct protocol handler.
- After the device successfully reports, Plaspy provides visibility for monitoring, event alerts, and historical position data.
- The TK-120 can still deliver SMS location replies to a phone number, but for platform monitoring use GPRS reporting to Plaspy.

## Common Configuration Workflow

1. Access the official GOTOP TK-120 configuration method or software as documented by the manufacturer.
2. Enter the Plaspy server address either as the domain d.plaspy.com or the server IP 54.85.159.138 in the device settings.
3. Set the reporting port to 8888 for the device reporting profile.
4. Choose the transport protocol UDP or TCP if the device requires selecting a transport method.
5. Apply or save the configuration on the TK-120 using the manufacturer tool or SMS command.
6. Restart the device if required by the device or firmware to apply network settings.
7. Validate that the device reports to Plaspy and that position updates appear on the platform.

## Example Configuration Commands

The exact commands and configuration syntax for the GOTOP TK-120 depend on the firmware and the vendor tools you use. TK-120 devices commonly support SMS based configuration and vendor configuration utilities, but the specific command set varies by firmware release. Consult the official GOTOP configuration manual for the precise SMS commands or software steps to set server, port, and APN values.

If you prefer SMS setup, typical public flows involve sending SMS commands to set APN, server, and port, then querying the device to confirm settings. Because command formats vary by firmware, please refer to the GOTOP manual for the exact SMS strings required for your device.

## Configuration Notes

- Firmware and hardware revisions can change available commands and menus; always note the device firmware version before performing mass configuration.
- Choose UDP or TCP according to network reliability and carrier behavior; UDP is common for reduced overhead while TCP may offer more reliable delivery in some networks.
- SMS based setup is convenient for remote devices, but ensure APN and GPRS data are functioning so the device can reach the Plaspy server.
- Keep documentation of the exact settings used for each device so you can reproduce or troubleshoot configurations across a fleet.
- Confirm any vendor specific tools or configuration utilities are the official versions provided by GOTOP to avoid compatibility issues.

## Why Use Plaspy with This Configuration

Using the GOTOP TK-120 with Plaspy provides a practical way to combine the tracker’s compact form factor and GSM based reporting with a centralized fleet and asset monitoring platform. Configuring the device to report to Plaspy lets organizations see live locations, review event history, and consolidate visibility for multiple devices in one place.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific configuration details, firmware behavior, and official instructions on the manufacturer website https://www.gotop.cc/ as vendor specifications and setup methods may change over time.
