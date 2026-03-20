---
slug: /aquila/bharat_101/configuration
id: bharat_101-configuration
sidebar_label: Configuration
title: Aquila - BHARAT 101 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide to connect Aquila BHARAT 101 with Plaspy using shared server settings and practical setup steps
keywords:
  - Aquila BHARAT 101 configuration
  - BHARAT 101 setup Plaspy
  - Aquila tracker configuration
  - BHARAT 101 server configuration
  - BHARAT 101 GPS tracker setup
  - Aquila vehicle tracker Plaspy
  - BHARAT 101 configuration guide
  - Aquila AIS140 tracker setup
  - BHARAT 101 fleet tracking setup
  - Aquila GPS platform setup
---

# Aquila - BHARAT 101 Configuration

This page provides the public configuration context for using the Aquila BHARAT 101 with Plaspy. It collects the practical, platform-facing settings you will need to point the device at Plaspy, explains the typical workflow for applying those settings, and highlights the common prerequisites you should confirm before integration. The guidance here is focused on the shared server settings and how the tracker is expected to report to the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps for the BHARAT 101 can vary by firmware, hardware revision, installation type, and the vendor tools used by your installer. Always combine the server settings below with the manufacturer tools or installer procedures you have for the BHARAT 101.

## Configuration Overview

The goal of the configuration process is to prepare the BHARAT 101 to communicate reliably with Plaspy, validate successful connectivity, and enable the device to appear and report correctly in the platform. Using the server endpoint and port listed below, the tracker will send its location and event data to Plaspy where protocol detection is automatic.

- Point the BHARAT 101 to Plaspy using the server domain or server IP and the shared Plaspy port
- Choose the transport mode required by the device configuration tool, either UDP or TCP on the Plaspy port
- Save and apply settings using the official Aquila configuration method or installer software
- Restart the unit if indicated by the device tool to start reporting to the Plaspy endpoint
- Verify the device appears and reports on Plaspy after configuration

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP depending on device configuration options  
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- Device powered and accessible for configuration or installation
- Active SIM installed if using cellular connectivity supported by the BHARAT 101
- Access to the official Aquila configuration method or the vendor supplied configuration software
- Up to date firmware information and knowledge of the hardware revision
- Network data plan and coverage for the SIM being used
- Installer access to test the device on the vehicle and confirm physical connections

## How This Tracker Connects to Plaspy

The BHARAT 101 is configured to report location, movement, and device events to the shared Plaspy endpoint and port so Plaspy can display and process the incoming telemetry. Using either the provided domain or the IP with the common port ensures Plaspy receives the data and applies automatic protocol detection for parsing.

- Device reports are addressed to d.plaspy.com or 54.85.159.138
- Communications use port 8888 for all supported devices in Plaspy
- Transport can be configured as UDP or TCP depending on the configuration tool or firmware option
- Plaspy automatically detects the tracker protocol so explicit protocol selection on the platform side is not required
- Once reporting, Plaspy will process position updates and event messages for operational monitoring

## Common Configuration Workflow

1. Access the official Aquila configuration method or software provided for the BHARAT 101. This may be a PC tool, mobile app, or installer interface.
2. Enter the Plaspy server endpoint using either the domain d.plaspy.com or the server IP 54.85.159.138 as required by the tool.
3. Set the device port value to 8888 which Plaspy uses for all supported trackers.
4. Choose UDP or TCP if the device requires a transport selection during setup.
5. Apply or save the configuration in the vendor tool so the tracker stores the new server settings.
6. Restart or power cycle the BHARAT 101 if the configuration tool or device documentation recommends it.
7. Validate that the device reports to Plaspy by checking for incoming data in the platform after the restart

## Example Configuration Commands

The exact configuration commands or SMS strings for the BHARAT 101 depend on the Aquila configuration tool and firmware version, and those manufacturer provided methods can vary. For the Plaspy integration you will point the device at d.plaspy.com or 54.85.159.138 using port 8888 and choose UDP or TCP as the transport if prompted. Consult Aquila configuration documentation or your installer for the precise command syntax or tool actions required to write those settings to the device.

## Configuration Notes

- Different firmware versions or hardware revisions of the BHARAT 101 can present different configuration menus or command syntaxes; confirm the exact steps with Aquila documentation.
- TCP and UDP behave differently on cellular networks; choose the transport that matches the device documentation and network reliability considerations.
- Plaspy uses the same port for all devices and provides automatic protocol detection so you only need to set the domain or IP and the port on the device.
- Keep a copy of original device settings before making changes so you can restore them if needed.
- Rely on the manufacturer configuration tool for exact commands and any device specific options such as enabling additional data channels or serial port forwarding

## Why Use Plaspy with This Configuration

Using the Aquila BHARAT 101 with Plaspy brings device level durability and compliance from an AIS140 certified tracker together with a platform that accepts a shared server endpoint and port for straightforward integration. This combination is useful for organizations that need persistent location visibility, event monitoring, and centralized oversight of a mixed fleet using a unified ingestion point.

To learn more about Plaspy visit https://www.plaspy.com and to verify the latest device specific configuration information and firmware behavior check the manufacturer site https://www.itriangle.in/. Manufacturer specifications and setup methods can change over time so confirm current details with Aquila documentation when planning deployment.
