---
slug: /laipac/s911_lola/configuration
id: s911_lola-configuration
sidebar_label: Configuration
title: Laipac - S911 Lola Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Laipac S911 Lola with Plaspy server settings and practical setup steps
keywords:
  - Laipac S911 Lola
  - Laipac S911 configuration
  - S911 Lola setup
  - S911 server configuration
  - Plaspy device setup
  - Plaspy tracker configuration
  - Laipac GPS tracker setup
  - personal GPS tracker configuration
  - mPERS S911 configuration
  - S911 Lola Plaspy setup
---

# Laipac - S911 Lola Configuration

This page describes the public configuration context for using the Laipac S911 Lola with Plaspy. It covers the practical server settings and high level workflow needed to point the S911 Lola at Plaspy so the device can report location and event information to the platform. Use this guide together with the device manual and vendor tools for manufacturer specific steps.

Plaspy uses shared server settings across all supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and the configuration tools provided by Laipac or resellers. The details below focus on the public server settings and practical actions you will commonly perform when integrating this mPERS device with Plaspy.

## Configuration Overview

Setting up the S911 Lola for Plaspy is primarily about configuring the device to send its location and alert messages to Plaspy's shared server endpoint and validating that data reaches the platform. Once the device is pointed at the Plaspy endpoint and saved, verify connectivity so the device becomes visible and manageable within Plaspy.

- Configure the device server address so reports go to Plaspy
- Select the transport type if the device requires UDP or TCP
- Set the shared port used by Plaspy and save the configuration
- Validate that the device sends periodic and event messages to Plaspy
- Confirm alerts like SOS are also visible in the platform once the device is connected

## Plaspy Server Settings

Use the following public server settings when configuring the S911 Lola for Plaspy:

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support: device may be configured using UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects  
- Note that Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- Ensure the S911 Lola has a charged battery and is powered on
- Insert an active micro SIM card with voice and data enabled if required by the device
- Have the device IMEI or unique identifier available for registration in Plaspy
- Access to the official Laipac configuration method or software supplied by the vendor
- Administrative access to your Plaspy account or the person who will register the device
- Reliable cellular coverage at the device installation or testing location

## How This Tracker Connects to Plaspy

When configured, the S911 Lola is set to report location, SOS events, and other device alerts to Plaspy's shared server endpoint and port. Plaspy receives those reports, automatically determines the device protocol, and makes the device visible in the platform for monitoring and event handling.

- Device sends periodic position reports to d.plaspy.com or 54.85.159.138 on port 8888  
- The device can use UDP or TCP transport depending on configuration and firmware support  
- Plaspy detects the protocol automatically and parses incoming data for display  
- SOS and alert messages are forwarded to Plaspy so they can be routed to configured contacts or workflows  
- Once the device registers with the server, it appears in the Plaspy interface for monitoring

## Common Configuration Workflow

1. Access the official Laipac configuration method or software provided with the S911 Lola (SMS commands, web tool, or vendor utility as applicable).  
2. Enter the Plaspy server address as either d.plaspy.com or 54.85.159.138 in the device server field.  
3. Set the device port to 8888 (Plaspy uses the same port for all devices).  
4. Choose UDP or TCP transport if the configuration requires a transport selection.  
5. Apply or save the configuration in the device tool or send the configuration commands to the device.  
6. Restart or power cycle the device if required by the manufacturer to apply changes.  
7. Validate that the device reports to Plaspy by checking device status in the platform and observing initial position or event messages.

## Example Configuration Commands

The exact commands and syntax used to configure the S911 Lola depend on Laipac firmware and the vendor tools you use. Manufacturer-supplied command sets may use SMS, serial, or a configuration utility. Because commands differ by firmware and tool, consult the device manual or Laipac configuration guide for the exact syntax required to set server, port, and transport. If your vendor provides a command list, apply the steps in the Common Configuration Workflow to enter:

- server address as d.plaspy.com or 54.85.159.138  
- port as 8888  
- transport as UDP or TCP if required  

If you receive a manufacturer command list, follow the provided order and include any required placeholders exactly as shown by Laipac.

## Configuration Notes

- Firmware and hardware revisions can change command syntax and available settings; always confirm commands against the device manual.  
- Choosing UDP versus TCP may affect delivery behavior; pick the transport type supported by your installation and test connectivity.  
- Plaspy uses the same port 8888 for all devices and performs automatic protocol detection on incoming connections.  
- If the device supports SMS-based configuration, ensure SMS commands are formatted precisely and that the SIM has SMS enabled.  
- Keep a record of the IMEI and the settings applied so you can troubleshoot registration or connectivity issues with Plaspy support or the device vendor.

## Why Use Plaspy with This Configuration

Using Plaspy with the Laipac S911 Lola lets organizations centralize visibility of location and emergency events from small personal trackers into a single monitoring platform. This configuration enables timely alerts, location visibility, and operational oversight that are useful for lone worker safety programs, campus security, youth and family tracking, and asset protection scenarios.

To learn more about Plaspy and platform capabilities, visit https://www.plaspy.com. For the most current device specific configuration details, firmware notes, and command syntax consult the Laipac website at https://laipac.com/ as manufacturer specifications and setup methods can change over time.
