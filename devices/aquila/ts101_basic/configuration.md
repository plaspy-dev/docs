---
slug: /aquila/ts101_basic/configuration
id: ts101_basic-configuration
sidebar_label: Configuration
title: Aquila - TS101-Basic Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Aquila TS101-Basic showing how to prepare the device for use with the Plaspy platform
keywords:
- Aquila TS101-Basic configuration
- Aquila TS101-Basic setup
- Aquila tracker configuration
- TS101-Basic Plaspy setup
- Plaspy server configuration
- GPS tracker configuration guide
- vehicle tracking setup
- fleet management tracker
- TS101-Basic GPS platform setup
- tracker configuration for Plaspy
---

# Aquila - TS101-Basic Configuration

This page covers the public configuration context for using the Aquila TS101-Basic with the Plaspy platform. It explains the shared server settings and practical steps you will commonly use to point the tracker at Plaspy so the device can report location and status. The TS101-Basic is a compact vehicle tracker with a tamper proof switch, IP65 casing, internal antennas, online real time tracking, and on device solid state storage for 10,000 records, all of which make it suitable for fleet and asset tracking scenarios.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. Use this guide to understand the public Plaspy endpoint and the practical workflow for configuring the TS101-Basic; always cross check any device specific commands or tools against the official manufacturer documentation.

## Configuration Overview

Preparing the TS101-Basic for Plaspy focuses on making sure the device can reach the Plaspy endpoint and that the platform receives the tracker ID and position updates. The configuration process is primarily about pointing the device at the Plaspy server, selecting the correct transport if required, and verifying connectivity and reporting.

- Configure the device to report to Plaspy using the public server endpoint and port.
- Select the appropriate transport mode on the tracker if the firmware requires UDP or TCP to be chosen.
- Save and apply settings in the manufacturer configuration tool or SMS interface.
- Restart or power cycle the tracker if required to initiate the first connection.
- Validate that Plaspy receives the first position and shows the device online in the platform.
- Keep the device firmware and installation notes handy for troubleshooting and future updates.

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

These shared settings are used by Plaspy for all supported devices and allow Plaspy to accept connections on a single, consistent port while detecting the device protocol automatically.

## Typical Requirements Before Setup

- Device powered and installed according to the manufacturer's mechanical and electrical guidelines.
- Access to the official manufacturer configuration method or software for the TS101-Basic.
- The device must be able to establish outbound network connections per the installation environment.
- A record of the device unique identifier such as IMEI or tracker ID for registration and verification.
- Knowledge of the device firmware version and any vendor specific setup notes.
- Administrative access to any configuration tool or SMS interface used for unlocking or changing server settings.

## How This Tracker Connects to Plaspy

When configured for Plaspy the tracker sends periodic location and status updates to the shared Plaspy endpoint and port so the device becomes visible inside the Plaspy platform. Plaspy receives the data and uses protocol detection to interpret the device messages without requiring separate ports for each tracker type.

- The tracker reports location and movement data to the Plaspy server endpoint at d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy automatically detects the tracker protocol when a connection is established.
- The platform processes incoming reports to provide real time visibility and historical storage.
- Event notifications and device status updates are transmitted to Plaspy for operational monitoring.
- Successful configuration makes the TS101-Basic visible in Plaspy and available for tracking and reporting.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the TS101-Basic following vendor instructions.
2. Enter the Plaspy server address either as the domain d.plaspy.com or the server IP 54.85.159.138 in the server field.
3. Set the server port to 8888 as the destination port for reporting.
4. Choose UDP or TCP if the device requires a transport selection in its configuration interface.
5. Apply or save the configuration using the manufacturer tool or method.
6. Restart or power cycle the device if the firmware requires a reboot to apply network settings.
7. Validate that the device reports to Plaspy by checking the device status in the platform and confirming the first position upload.

## Example Configuration Commands

The TS101-Basic manufacturer tools and firmware vary by revision and vendor distribution, so exact commands or SMS strings differ between units. Because no public command set was provided here, use the official Aquila configuration software or the manufacturer documentation to perform server and port changes. When the device requires manual input, enter the server as d.plaspy.com or 54.85.159.138 and the port as 8888; select UDP or TCP if transport selection is required. Plaspy will detect the tracker protocol automatically once the device connects.

## Configuration Notes

- Firmware versions and vendor configuration tools may present different menus or command strings; always check the device firmware release notes.
- Installers should record the IMEI or device ID and verify the first online report in Plaspy after configuration.
- Choosing UDP or TCP can affect connection behavior depending on network conditions; test both if connectivity issues appear.
- Because Plaspy uses the same port for all supported devices, keep server and port consistent across devices to simplify fleet setup.
- Refer to the official manufacturer documentation for device specific commands, SMS strings, or optional features that are outside the public Plaspy settings.

## Why Use Plaspy with This Configuration

Using the Aquila TS101-Basic with Plaspy provides a practical way to bring rugged, discreet tracking hardware into a centralized fleet management platform. The device's tamper proof design, IP65 casing, internal antennas, and durable storage make it a solid candidate for vehicle tracking use cases where reliable reporting and historical data are important. Pointing the TS101-Basic at Plaspy with the shared settings gives teams a consistent, low overhead way to enroll devices and begin monitoring.

Learn more about Plaspy and how the platform can work with compatible trackers at https://www.plaspy.com. Please verify the latest device specific configuration steps, firmware behavior, and manufacturer details with the official Aquila documentation at https://www.itriangle.in/ as manufacturer methods and firmware can change over time.
