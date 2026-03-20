---
slug: /careu/uwatch_wt1/configuration
id: uwatch_wt1-configuration
sidebar_label: Configuration
title: CAREU - uWatch WT1 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for CAREU uWatch WT1 integration with Plaspy covering server settings and setup workflow
keywords:
  - CAREU uWatch WT1 configuration
  - CAREU uWatch WT1 setup
  - uWatch WT1 Plaspy
  - uWatch WT1 configuration guide
  - uWatch WT1 server settings
  - Plaspy tracker configuration
  - wearable GPS tracker setup
  - GPS smartwatch configuration
  - uWatch WT1 tracking software
  - personnel monitoring device configuration
---

# CAREU - uWatch WT1 Configuration

This page documents the public configuration context for using the CAREU uWatch WT1 with Plaspy. It focuses on the shared Plaspy server settings and practical steps installers and administrators commonly follow to point the device at Plaspy so location, SOS events, and available telemetry are delivered into a Plaspy account. Use this guide together with the device manufacturer documentation for the most accurate device-specific procedures.

Plaspy uses a consistent shared server endpoint and port across supported devices and will automatically detect the tracker protocol once the device reports. Exact manufacturer-side steps for configuring the uWatch WT1 can vary by firmware version, hardware revision, vendor tools, and installation type, so confirm final steps with the official manufacturer material when necessary.

## Configuration Overview

This configuration process prepares the uWatch WT1 to communicate with Plaspy by pointing the device to the Plaspy server, confirming transport settings, and validating that telemetry and emergency alerts arrive in the platform. The goal is to enable reliable location updates, SOS notifications, and any supported health telemetry to appear within Plaspy so caregivers and operations teams can monitor and respond.

- Point the tracker to the Plaspy server endpoint and ensure it uses the shared Plaspy port
- Verify transport selection (UDP or TCP) if required by the device configuration tool
- Confirm cellular or messaging connectivity required by the wearable for reporting
- Validate the device is visible and reporting in Plaspy after configuration
- Optionally configure geofences, SOS recipients, and reporting intervals via manufacturer tools and Plaspy

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP address: 54.85.159.138  
- Port: 8888 (Plaspy uses the same port for all supported devices)  
- Transport: support for UDP or TCP on port 8888 depending on device preference  
- Plaspy behavior: automatic protocol detection in Plaspy detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A charged and functional uWatch WT1 wearable with access to the manufacturer configuration method or software
- Active connectivity for the device as required by the model such as a working cellular SIM or SMS service where applicable
- Access to the device IMEI or identifier and any account information required to pair the device in Plaspy
- Administrative access to the configuration tool or vendor app used to change server and transport settings
- A Plaspy account with permission to add and monitor devices so you can validate reporting after setup

## How This Tracker Connects to Plaspy

The uWatch WT1 is configured to send its location updates, SOS alerts, and available telemetry to the shared Plaspy server endpoint and port. Once the device is directed to d.plaspy.com or 54.85.159.138 on port 8888, Plaspy automatically detects the tracker protocol and begins ingesting the device data into the platform for map display and alerting.

- Device reports are sent to the Plaspy endpoint d.plaspy.com or 54.85.159.138 on port 8888  
- Transport can be configured as UDP or TCP depending on device requirements and network conditions  
- Plaspy automatically detects the tracker protocol when the device connects to the shared port  
- Location updates, SOS events, and supported telemetry appear in Plaspy for monitoring and historical playback  
- Successful connection enables Plaspy to timestamp and visualize incoming telemetry for operational use

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the CAREU uWatch WT1 (vendor app, web portal, or SMS commands if supported).  
2. Enter the Plaspy server endpoint using either d.plaspy.com or the IP 54.85.159.138 as allowed by the device tool.  
3. Set the destination port to 8888 (note that Plaspy uses the same port for all supported devices).  
4. Choose the transport protocol UDP or TCP if the device requires a transport selection.  
5. Apply or save the configuration in the manufacturer tool and confirm settings committed to the device.  
6. Restart the device if the manufacturer instructions require a reboot to activate new server settings.  
7. Validate that the device reports to Plaspy by checking for incoming location or telemetry in your Plaspy account and confirming protocol detection.

## Example Configuration Commands

No public device command strings are provided here. Exact configuration commands and the method to apply them vary by manufacturer tool, firmware, and regional device variants. CAREU devices may be configured using vendor software, web portals, or, where supported by the device, SMS configuration. Refer to the official CAREU documentation for the specific command syntax or configuration screens for your firmware version.

If you have a vendor-provided command list, apply commands in the order recommended by the manufacturer and preserve any placeholders such as APN values exactly as supplied. If you receive public commands from the vendor, they should be executed using the vendor's recommended channel and verified by confirming device reporting to d.plaspy.com or 54.85.159.138 on port 8888.

## Configuration Notes

- Firmware differences and hardware revisions can change how configuration screens or SMS commands appear; always confirm with the manufacturer documentation for your device revision.  
- Choose UDP or TCP based on network reliability and the recommendations of the device tool; Plaspy accepts both on port 8888 and detects the protocol automatically.  
- All devices connecting to Plaspy use the same port, so consistent port configuration simplifies fleet setup.  
- If the device supports SMS configuration, ensure the correct APN and messaging settings are in place before attempting to point the server.  
- After configuring server and transport, allow a short window for the device to establish connection and for Plaspy to auto detect the protocol.

## Why Use Plaspy with This Configuration

Using the CAREU uWatch WT1 with Plaspy centralizes location and available health telemetry into a single operational view. That combination helps care teams and organizations maintain situational awareness, receive SOS notifications quickly, and review historical routes alongside device-provided vital signs and events.

Learn more about Plaspy and how devices integrate with the platform at https://www.plaspy.com. For the latest device specific instructions, firmware notes, and manufacturer details for the CAREU uWatch WT1, verify the official guidance from the device manufacturer at https://www.systech-iot.com/ since setup methods and firmware behavior can change over time.
