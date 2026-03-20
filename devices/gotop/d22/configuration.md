---
slug: /gotop/d22/configuration
id: d22-configuration
sidebar_label: Configuration
title: GOTOP - D22 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GOTOP D22 showing Plaspy server settings and practical setup steps for integration
keywords:
  - GOTOP D22 configuration
  - GOTOP D22 setup
  - GOTOP D22 Plaspy
  - GOTOP D22 server configuration
  - GOTOP GPS tracker configuration
  - vehicle tracking configuration
  - fleet management tracker setup
  - GOTOP D22 installation
  - GPS tracker server settings
  - D22 tracking setup
---

# GOTOP - D22 Configuration

This page describes the public configuration context for using the GOTOP D22 tracker with Plaspy. It focuses on the shared server settings and practical steps you can apply so the D22 reports location and events to Plaspy, while also calling out what to check before attempting integration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when devices send data to the platform. Manufacturer side setup steps for the D22 can vary depending on firmware version, hardware revision, installation type, and the vendor configuration tools you use. Use the guidance below together with GOTOP documentation for the most current device specific instructions.

## Configuration Overview

The goal of this configuration is to prepare the GOTOP D22 to communicate reliably with the Plaspy platform so vehicles and assets are visible in real time. Configuration ties the D22 device reporting to Plaspy server endpoints and ensures the device transmits over the correct transport and port.

- Configure the tracker to report to the Plaspy server endpoint so location and alarm events are transmitted.
- Select the transport mode supported by the device and set the common Plaspy port used for all devices.
- Save and apply settings on the D22 and restart it if the tool or firmware requires a reboot.
- Validate connectivity by verifying the device appears in Plaspy and is sending updates.
- Adjust alarm, SOS, and sensor inputs in the device configuration to ensure events are forwarded to Plaspy.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the GOTOP D22:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on the device configuration option
- Plaspy automatically detects the tracker protocol when the device sends data

Note that Plaspy uses the same port for all supported devices and relies on automatic protocol detection to identify the tracker protocol.

## Typical Requirements Before Setup

- Device powered and installed according to GOTOP installation guidance, with battery charged or vehicle power connected.
- Network coverage that supports the device 4G cellular module and the tracker has network access.
- Access to GOTOP configuration tools or the vendor portal used to set device parameters.
- Basic device identifiers such as IMEI available to identify the unit in Plaspy once it connects.
- A Plaspy account or provisioning workflow to register and monitor the device on the platform.
- Awareness of the tracker firmware version so you can follow the matching configuration procedure in the GOTOP documentation.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the D22 sends its telemetry and event data to the shared Plaspy server endpoint and port so the platform can provide tracking and monitoring services.

- The tracker transmits position fixes and alarm events to the configured Plaspy server domain or IP.
- Data is sent over the chosen transport protocol either UDP or TCP to port 8888.
- Plaspy receives incoming connections on the shared port and automatically detects the device protocol for processing.
- Once data is received, Plaspy displays location, movement, and alarm status for operational monitoring.
- The tracker can also store data offline and forward stored records to Plaspy after connectivity is restored.

## Common Configuration Workflow

1. Access the official GOTOP D22 configuration method or software provided by the manufacturer or vendor.
2. Locate the server or APN reporting settings section in the configuration tool.
3. Enter the Plaspy server as d.plaspy.com or use the IP 54.85.159.138 as an alternative endpoint.
4. Set the device port to 8888 which is used by Plaspy for all supported devices.
5. Choose UDP or TCP transport if the device requires a transport selection.
6. Apply or save the configuration changes in the GOTOP tool.
7. Restart the device if the tool or firmware requests a reboot to apply settings.
8. Validate that the device reports to Plaspy by checking the device status in your Plaspy account and confirming recent location or event updates.

## Example Configuration Commands

The D22 configuration method varies by manufacturer tool and firmware. GOTOP devices are commonly configured using vendor software, web portals, or SMS/command interfaces depending on the firmware. Because configuration commands and syntax depend on the specific firmware version and vendor tool, exact command examples are not provided here. Refer to GOTOP configuration guides for any command line or SMS templates they publish and follow the order recommended by the manufacturer when applying settings.

## Configuration Notes

- Firmware and hardware revisions may change menu names, command syntax, or configuration workflows. Confirm the steps match your device firmware.
- Choose UDP or TCP according to your installation and network needs. Both transports are supported by Plaspy on port 8888, and Plaspy will auto detect protocol.
- If the D22 uses offline storage, verify that stored data is forwarded after connectivity is restored so Plaspy receives blind area uploads.
- Configure alarm inputs such as SOS, power failure, over speed, and door sensor reporting in the device so those events are sent to Plaspy.
- Two way audio and external relay control must be configured per GOTOP instructions when supported by your D22 firmware and installation.

## Why Use Plaspy with This Configuration

Using the GOTOP D22 with Plaspy gives organizations a straightforward path to get real time location, alarm reporting, and operational visibility. The shared Plaspy server settings simplify deployment because the platform uses the same port for all devices and automatically detects the tracker protocol when the device connects.

To learn more about Plaspy and how it supports device integrations visit https://www.plaspy.com. For the latest GOTOP D22 specific configuration details, firmware notes, and manufacturer instructions verify information on the official GOTOP site https://www.gotop.cc/ as manufacturer specifications and setup methods may change over time.
