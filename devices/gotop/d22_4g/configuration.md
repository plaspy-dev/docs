---
slug: /gotop/d22_4g/configuration
id: d22_4g-configuration
sidebar_label: Configuration
title: GOTOP - D22-4G Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the GOTOP D22-4G tracker to Plaspy for real time fleet tracking
keywords:
  - GOTOP D22-4G configuration
  - GOTOP D22-4G setup
  - GOTOP tracker Plaspy
  - D22-4G Plaspy integration
  - GOTOP GPS tracker configuration
  - vehicle tracker setup Plaspy
  - D22-4G server settings
  - fleet tracking D22-4G
  - Plaspy tracker configuration
  - GPS tracker server setup
---

# GOTOP - D22-4G Configuration

This page documents the public configuration context for using the GOTOP D22-4G Waterproof GPS Tracker with Plaspy. It explains the shared Plaspy server settings that all compatible devices use and provides practical guidance on preparing the D22-4G to report into the Plaspy platform for real time tracking and fleet management.

Plaspy uses a single shared server endpoint and port across supported devices and automatically detects the tracker protocol. Manufacturer-side setup steps for the D22-4G can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so this page focuses on the public, platform-side values and a practical workflow for integration.

## Configuration Overview

Configuring the D22-4G for Plaspy prepares the device to deliver location, telemetry, and event data reliably to the platform. The steps below focus on setting the network destination and transport so the device can establish a TCP/IP connection and start sending GPS and sensor events to Plaspy for display, alerts, and reporting.

- Point the tracker to the Plaspy server endpoint so TCP/IP packets reach the platform
- Select the transport protocol the device requires (UDP or TCP) and set the shared port
- Verify cellular connectivity and that the device has an active SIM and network service
- Save and apply settings on the device and restart if required to begin reporting
- Confirm visibility in Plaspy by validating the device reports location and events

## Plaspy Server Settings

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888  
- transport support for UDP or TCP  
- automatic protocol detection in Plaspy  

Note that Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol when the device connects to d.plaspy.com or 54.85.159.138 on port 8888.

## Typical Requirements Before Setup

- A properly installed D22-4G unit powered from the vehicle wiring harness or approved power source
- An active cellular SIM with data enabled compatible with your regional 4G bands and carrier
- Access to the GOTOP configuration method recommended for your unit such as manufacturer software, a configuration tool, or SMS commands if supported
- Network coverage for 4G LTE in the device location to allow TCP/IP communication with Plaspy
- The Plaspy server settings (d.plaspy.com or 54.85.159.138 and port 8888) available to enter during configuration
- A Plaspy account and device registration process on the platform to link reported device ID to your fleet (platform side)

## How This Tracker Connects to Plaspy

When configured to point at the Plaspy server, the D22-4G establishes a cellular TCP/IP session and sends location and event messages to the shared Plaspy endpoint. Plaspy ingests these messages, maps the device identifier to your account, and displays real time telemetry and historical records for fleet management.

- The tracker reports GPS/BDS position updates and movement events over 4G TCP/IP to d.plaspy.com or 54.85.159.138 on port 8888  
- Telemetry such as ignition status, door input, overspeed and vibration alarms are sent as event messages to Plaspy  
- Offline buffer and blind area retransmission allow the device to forward stored records to the same Plaspy endpoint once connectivity is restored  
- Plaspy automatically detects the tracker protocol when the device connects on the shared port so device messages are parsed and shown in the platform  
- Device health and connectivity status become visible in your Plaspy dashboard for operational monitoring

## Common Configuration Workflow

1. Access the official GOTOP configuration method for the D22-4G (manufacturer web tool, desktop app, or approved configuration utility).  
2. Enter the Plaspy server address as either d.plaspy.com or 54.85.159.138 in the device server or reporting settings.  
3. Set the device port to 8888 as the destination port for reporting.  
4. Choose UDP or TCP as the transport if the device requires an explicit transport selection.  
5. Apply or save the configuration settings using the GOTOP tool or device interface.  
6. Restart the device if the manufacturer instructions require a reboot to activate new network settings.  
7. Validate that the device reports to Plaspy by checking device connectivity and location updates in your Plaspy account or platform dashboard.

## Example Configuration Commands

The manufacturer may provide multiple configuration methods such as a desktop utility, web tool, or SMS/AT-style commands. Exact public command lines or SMS command syntax are not included here because they vary by firmware and tool. If you have GOTOP-provided commands or an SMS configuration sheet from the vendor, apply the sequence that sets:

- server to d.plaspy.com or 54.85.159.138  
- port to 8888  
- transport to UDP or TCP if required

If you need device-level commands, consult the GOTOP D22-4G configuration guide from the manufacturer for the exact syntax and the recommended order for applying settings.

## Configuration Notes

- Firmware differences can change menu names, command syntax, and available transport options; always confirm commands against the device firmware version.  
- Choose TCP or UDP according to the device tool instructions; Plaspy accepts either on port 8888 and will detect the protocol automatically.  
- Use the domain name d.plaspy.com or the provided IP address 54.85.159.138; either option is acceptable for routing to Plaspy, but some installers prefer domain names for future server updates.  
- Keep a record of the device IMEI or identifier before configuration so you can match it to the correct asset in Plaspy.  
- Manufacturer configuration tools and SMS commands are the authoritative source for exact steps; refer to GOTOP documentation when in doubt.

## Why Use Plaspy with This Configuration

Using the GOTOP D22-4G with Plaspy provides centralized visibility into vehicle location, events, and telemetry for fleet operations, loss prevention, and driver safety workflows. The D22-4G’s vehicle-focused inputs and alarm capabilities pair with Plaspy’s real time ingestion and automatic protocol detection to deliver a reliable tracking solution for commercial fleets.

Learn more about Plaspy and how platform features map to device capabilities at https://www.plaspy.com. For the latest device specific configuration methods, firmware notes, and detailed setup instructions for the D22-4G, please verify current information with the manufacturer at https://www.gotop.cc/.
