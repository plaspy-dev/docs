---
slug: /lk_gps/lk980/configuration
id: lk980-configuration
sidebar_label: Configuration
title: LK-GPS - LK980 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for LK GPS LK980 to connect with Plaspy including server settings and setup workflow
keywords:
  - LK GPS LK980 configuration
  - LK980 setup for Plaspy
  - LK GPS server configuration
  - LK980 tracking software configuration
  - LK980 GPS platform setup
  - LK GPS device integration
  - vehicle tracking LK980
  - LK980 4G tracker configuration
  - Plaspy tracker configuration
  - tracker server settings
---

# LK-GPS - LK980 Configuration

This page covers the public configuration context for using the LK-GPS LK980 tracker with Plaspy. It summarizes the practical server settings and the typical steps you will follow to point the device to Plaspy so the tracker can report location and basic events to the platform. The guide uses only public configuration facts and provides a concise workflow for integrating the LK980 with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary depending on firmware, hardware revision, installation type, and vendor tools. The LK980 is a compact car tracker with built-in GPS and GSM antennas and 4G connectivity, and it supports mobile and web platform access for monitoring; use the manufacturer tools to perform the final device-side configuration.

## Configuration Overview

This configuration prepares the LK980 to communicate reliably with Plaspy so the device appears in your Plaspy account and reports location and relevant alarms. The process focuses on configuring the device network settings, confirming transport and server endpoint information, and validating successful reporting to the Plaspy endpoint.

- Enter Plaspy server settings on the device using the manufacturer app or configuration tool.
- Select the transport protocol required by the device (UDP or TCP) and set the correct port.
- Verify the tracker has cellular connectivity and a correct APN if a SIM is used for 4G communication.
- Confirm the device is visible on Plaspy after saving settings and restarting if required.
- Validate event reports such as low battery or movement alarms show correctly in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; configure the transport the device requires
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A charged LK980 unit with power available for configuration and testing
- Active 4G capable SIM card installed if required by your installation and a working mobile data plan
- Access to the LK-GPS manufacturer configuration method such as the mobile app, web platform, or vendor tool provided for the LK980
- Visibility to GPS satellites during initial location tests so the device can acquire a fix
- Basic information about the device instance so you can identify it in Plaspy once reporting begins

## How This Tracker Connects to Plaspy

The LK980 is configured to report its location and event data to the shared Plaspy server endpoint and port. Once the LK980 has the correct server address, transport selection, and cellular connectivity, it will send periodic updates and alarms that Plaspy will ingest and associate with your account or device record.

- Device sends location updates to d.plaspy.com at port 8888
- Transport may use UDP or TCP depending on the device configuration choice
- Plaspy automatically detects the tracker protocol so the same port is used for all devices
- Event alarms like low battery, vibration, or tamper may be reported to Plaspy if enabled on the device
- Successful reports make the tracker visible in the Plaspy platform for monitoring and history queries

## Common Configuration Workflow

1. Access the official LK-GPS configuration method such as the LK980 mobile app or vendor configuration tool.
2. In the device server or network settings enter d.plaspy.com or the server IP 54.85.159.138 as the endpoint.
3. Set the device port to 8888 to match Plaspy server configuration.
4. Choose UDP or TCP if the device requires you to select a transport protocol.
5. Apply or save the configuration on the device and the manufacturer tool.
6. Restart the LK980 if the tool or instructions indicate a restart is required.
7. Validate that the device reports to Plaspy by checking for the device in your Plaspy account and confirming recent location or event updates.

## Example Configuration Commands

The exact configuration commands and the method to apply them depend on the LK-GPS manufacturer tools and device firmware. The LK980 is commonly configured through the official mobile app or a web platform provided by LK-GPS, where you enter the Plaspy server domain or IP and the port 8888, then save and reboot the device if required. Manufacturer documentation or the configuration app will show the specific fields and any required confirmation steps.

If you receive a command-based configuration guide from the manufacturer that uses SMS or a serial tool, follow those public commands exactly as documented by LK-GPS. Because commands and formats vary across firmware versions, use the official LK-GPS configuration reference when available.

## Configuration Notes

- Firmware differences and hardware revisions can change available configuration fields and command syntax; always confirm against LK-GPS documentation.
- Choose UDP or TCP according to network conditions and any guidance from the manufacturer; Plaspy accepts both on the shared port 8888.
- Enter either the domain d.plaspy.com or the IP 54.85.159.138; both point to the same Plaspy endpoint and will reach the platform.
- Ensure the device APN and SIM data plan are configured correctly for 4G connectivity if cellular data is required for reporting.
- After applying settings, allow several minutes and check Plaspy for the first location to confirm the device is reporting.

## Why Use Plaspy with This Configuration

Using the LK-GPS LK980 with Plaspy gives organizations an easy path to unify location and event reporting on a single platform. By pointing the tracker to Plaspy's shared server and port, you enable centralized monitoring of vehicle location, simple event visibility, and historical route access through the Plaspy interface.

To learn more about Plaspy and how it can manage trackers like the LK980 visit https://www.plaspy.com. For the latest device specific setup details, firmware notes, and configuration tools, verify information on the manufacturer's official website https://www.lk-gps.com. Manufacturer specifications and setup methods can change over time so review official LK-GPS documentation when performing final configuration.
