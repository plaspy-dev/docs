---
slug: /gotop/d06_4g/configuration
id: d06_4g-configuration
sidebar_label: Configuration
title: GOTOP - D06-4G Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GOTOP D06-4G and Plaspy with server settings and practical integration steps
keywords:
  - GOTOP D06-4G configuration
  - GOTOP D06-4G setup for Plaspy
  - GOTOP D06-4G server configuration
  - GOTOP GPS tracker setup
  - Plaspy device configuration
  - GPS platform setup for vehicles
  - vehicle tracking configuration
  - fleet tracking Plaspy
  - tracking device integration
  - D06-4G telemetry setup
---

# GOTOP - D06-4G Configuration

This page covers the public configuration context for using the GOTOP D06-4G tracker with the Plaspy platform. It summarizes the shared server settings Plaspy requires, explains the general workflow to point a D06-4G at the Plaspy endpoint, and highlights practical checks to validate connectivity and event reporting. Use this guide alongside the device manual and vendor tools for the exact manufacturer steps.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, so the same Plaspy endpoint and port are used for all compatible trackers. Manufacturer-side configuration steps for the D06-4G can vary by firmware, hardware revision, installation type, and vendor tools, so always confirm the precise commands or configuration method with the device documentation or installer interface.

## Configuration Overview

The configuration process prepares the D06-4G to transmit position and event data to Plaspy for real-time monitoring, alarms, and history. At a high level, you will configure the device to point to Plaspy's server, choose the transport protocol if required, save the configuration, and validate that data reaches the platform.

- Set the device server address to the Plaspy server endpoint so the tracker forwards telemetry to the platform.
- Configure the device to use the shared Plaspy port so the platform accepts data from the tracker.
- Choose UDP or TCP if the D06-4G configuration interface requires a transport selection.
- Save or apply the changes and restart the tracker if required by the device firmware.
- Verify online reporting and alarm events in Plaspy to confirm successful integration.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on the device as required  
- Automatic protocol detection in Plaspy so the platform will detect the device protocol when data arrives  
- Note that all devices in Plaspy use the same port so you should set port 8888 for every supported tracker

## Typical Requirements Before Setup

- Physical access to the tracker or remote access to the official manufacturer configuration interface or software
- Adequate power to the device and any required backup battery charged
- A valid active SIM card and mobile network connectivity if cellular data transmission is used (device supports 4G with 2G fallback)
- The device firmware and hardware revision known so you can follow the correct manufacturer commands or GUI steps
- Access to the GOTOP configuration manual or vendor tool for model D06-4G
- A Plaspy account and device provisioning ready in your Plaspy instance for final validation

## How This Tracker Connects to Plaspy

The D06-4G sends GNSS fixes and event telemetry over the mobile network to the configured server. Once the tracker is pointed at Plaspy using the shared server address and port, Plaspy ingests the incoming stream to present live location, alerts, and historical tracks.

- The tracker transmits position and event packets to d.plaspy.com or the server IP 54.85.159.138
- Plaspy receives data on the shared port 8888 and automatically detects the tracker protocol
- The device can use UDP or TCP transport depending on configuration; Plaspy supports both and will process incoming messages
- Events such as geofence breaches, power loss, SOS, and vibration alarms are forwarded to Plaspy as standard telemetry
- Once connected, the device becomes visible in Plaspy for live tracking, history playback, and alarm notifications

## Common Configuration Workflow

1. Access the official GOTOP D06-4G configuration method or software as described in the manufacturer documentation or vendor tool.
2. Locate the server or tracking server settings in the device interface.
3. Enter the Plaspy server as either the domain d.plaspy.com or the server IP 54.85.159.138.
4. Set the port to 8888 as required by Plaspy and save the port setting.
5. Choose UDP or TCP transport if the device requires a transport selection and save that option.
6. Apply or save the complete configuration and restart the device if the firmware requires a reboot for settings to take effect.
7. Validate that the device reports to Plaspy by checking the device online status and recent telemetry in the Plaspy platform.

## Example Configuration Commands

The exact configuration commands and message formats for the D06-4G depend on the GOTOP firmware and the vendor provisioning tool. Because manufacturer methods differ, consult the GOTOP user manual or configuration SMS/API guide for precise command syntax. In typical workflows you will replace the server target and port with the Plaspy values shown below when using manufacturer commands or SMS configuration:

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP

If your device supports SMS-based configuration or a CLI, look for commands that set the server host and port and apply those using the values above. For example, many GOTOP devices use a command pattern to set server and port; consult the device manual for the exact command format for the D06-4G. Because manufacturer syntax varies, this page does not invent specific commands; please follow GOTOP documentation or vendor-provided tools for the correct command structure.

## Configuration Notes

- Firmware differences can change command syntax and GUI layout; always match instructions to the D06-4G firmware version.
- Choose TCP if you need guaranteed delivery semantics in your environment, or UDP for lower overhead if the network is reliable; Plaspy accepts either transport on port 8888.
- Confirm SIM provisioning and data plan limits before large-scale deployment since cellular connectivity is required for live reporting.
- Installer practices and hardware revisions vary by regional vendors; verify the installation guide supplied with the unit.
- Use the Plaspy server domain or IP interchangeably if your configuration tool prefers one format over the other.

## Why Use Plaspy with This Configuration

Using the GOTOP D06-4G with Plaspy provides a straightforward path to bring robust position data and event telemetry into a single monitoring platform. The D06-4G’s offline storage and alarm reporting pair well with Plaspy’s ingestion and visualization, enabling reliable live tracking, event notification, and route history playback for fleet and security use cases.

Learn more about Plaspy and platform features at https://www.plaspy.com. For the most current device-specific configuration methods, firmware behavior, and manufacturer details, verify information on the GOTOP official site https://www.gotop.cc/ before applying changes.
