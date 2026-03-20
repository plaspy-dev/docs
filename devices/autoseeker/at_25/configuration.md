---
slug: /autoseeker/at_25/configuration
id: at_25-configuration
sidebar_label: Configuration
title: Autoseeker - AT-25 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the Autoseeker AT-25 to connect with Plaspy using public server details and practical setup guidance for reliable vehicle tracking
keywords:
  - Autoseeker AT-25 configuration
  - Autoseeker AT-25 setup
  - AT-25 Plaspy configuration
  - Autoseeker GPS tracker setup
  - vehicle tracker configuration
  - AT-25 server settings
  - Plaspy tracker setup
  - AT-25 tracking configuration
  - GPS platform setup
  - Autoseeker configuration guide
---

# Autoseeker - AT-25 Configuration

This page describes the public configuration context for using the Autoseeker AT-25 tracker with Plaspy. It presents the shared Plaspy server settings and practical guidance you can apply when integrating AT-25 devices into the Plaspy fleet platform. The information here focuses on the publicly available server endpoint and common setup steps while remaining manufacturer neutral.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but the exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor configuration tools. Use this guide to prepare and validate connectivity to Plaspy, and consult Autoseeker documentation for device specific commands or firmware notes.

## Configuration Overview

Configuring the AT-25 for Plaspy prepares the device to send location and event data to Plaspy's shared server endpoint so the device appears in the Plaspy platform and updates as expected. The AT-25 supports SMS and GPRS TCP reporting as well as modern cellular connections, so configuration typically covers server, transport, and reporting intervals.

- Point the AT-25 at the Plaspy server endpoint so telemetry is routed to Plaspy for processing and display
- Choose transport and reporting interval settings so updates match your monitoring needs
- Validate that the device has working cellular connectivity and correct APN settings
- Save and apply settings on the device, then confirm the device appears and reports in Plaspy
- Use SMS setup or the Autoseeker configuration tool when available to set server and transport values

## Plaspy Server Settings

When configuring an Autoseeker AT-25 to work with Plaspy, use the following public server settings:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so you can use either UDP or TCP where the device allows transport selection

Note that all devices in Plaspy use the same port for connectivity to simplify configuration and platform routing.

## Typical Requirements Before Setup

- Confirm the AT-25 is powered and has a charged backup battery fitted if required for installation
- Ensure a working SIM card is installed and cellular data is enabled for GPRS or 4G reporting
- Know or have access to the device configuration method provided by Autoseeker such as SMS commands or a configuration utility
- Have the Plaspy server values ready: d.plaspy.com or 54.85.159.138 and port 8888
- Verify network coverage at the installation site so the tracker can register and send data
- Obtain any APN and SIM credentials needed for the device to access mobile data

## How This Tracker Connects to Plaspy

The AT-25 sends position and event reports to the Plaspy server endpoint and port so Plaspy can process and show the device in your tracking account. Plaspy receives the incoming TCP or UDP connections and determines the device protocol automatically so manual protocol mapping is not required.

- The device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888
- Choose UDP or TCP transport on the device if it requires a selection; Plaspy accepts both
- Position fixes, alarms, and periodic updates are forwarded from the tracker to the Plaspy endpoint
- Plaspy correlates incoming data and makes the tracker visible in the platform dashboard
- You validate connectivity by confirming the device appears and sends recent updates to Plaspy

## Common Configuration Workflow

1. Access the official Autoseeker configuration method or software provided for the AT-25 such as SMS command setup or a manufacturer utility
2. Enter the Plaspy server address using either d.plaspy.com or 54.85.159.138 as the server endpoint
3. Set the server port to 8888 as the primary port for Plaspy connectivity
4. Choose UDP or TCP transport if the AT-25 requires transport selection
5. Apply or save the configuration on the device using the manufacturer tool or SMS command
6. Restart the tracker if the device or documentation indicates a reboot is required to apply settings
7. Validate that the device reports to Plaspy by checking the device status and recent location updates in the Plaspy platform

## Example Configuration Commands

The exact AT-25 configuration commands and syntax depend on Autoseeker firmware and the vendor provided tool. Manufacturers commonly provide SMS command formats or a configuration tool GUI. Because model specific command sets may vary by firmware revision, consult the Autoseeker documentation for the precise SMS or utility commands for your device.

If you have the Autoseeker SMS command list or configuration tool commands, use those methods to set the following values where applicable: server domain d.plaspy.com or server IP 54.85.159.138, port 8888, transport UDP or TCP, and any APN credentials required for mobile data.

## Configuration Notes

- Firmware variations can change command syntax and available options; always confirm commands with the latest Autoseeker documentation
- If the AT-25 supports both SMS and GPRS setup, SMS may be useful for remote configuration but GPRS will be used for continuous data reporting
- Choose TCP if you require connection oriented reporting or UDP when lower overhead is preferred, keeping in mind Plaspy supports both and detects protocol automatically
- Apply settings and then allow several minutes for the tracker to register on the mobile network and send the first reports to Plaspy
- Keep a record of any SMS commands you send for configuration and note whether a restart was required

## Why Use Plaspy with This Configuration

Using the Autoseeker AT-25 with Plaspy gives organizations a straightforward way to centralize vehicle visibility, alerts, and history on a single platform. With the AT-25 able to send updates over SMS or GPRS TCP and with cellular 4G support, it is practical for mixed installations where different connectivity options are required. Pointing the tracker to Plaspy's shared endpoint and using the same port for all devices simplifies deployment and fleet scale up.

Learn more about Plaspy and how it supports tracker integrations at https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so please verify the latest setup instructions on the manufacturer site https://autoseekergps.com/ before you begin.
