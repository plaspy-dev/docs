---
slug: /lk_gps/lk720_2g/configuration
id: lk720_2g-configuration
sidebar_label: Configuration
title: LK-GPS - LK720-2G Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for LK720-2G tracker showing Plaspy server settings and practical setup steps for integration
keywords:
  - LK-GPS LK720-2G
  - LK720-2G configuration
  - LK-GPS configuration
  - Plaspy tracker setup
  - Plaspy configuration
  - GPS tracker setup
  - vehicle tracking setup
  - LK720 setup for Plaspy
  - GPS platform integration
  - 2G GPS tracker configuration
---

# LK-GPS - LK720-2G Configuration

This page describes the public configuration context for using the LK-GPS LK720-2G tracker with the Plaspy tracking platform. It collects the practical, publicly available configuration information you need to point the device at Plaspy, validate connectivity, and enable visibility in the Plaspy dashboard and apps.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The LK720-2G supports SMS parameter configuration as a fallback and also works with browser and native mobile app management, so you may use the method that matches your deployment and the device firmware.

## Configuration Overview

This configuration prepares the LK720-2G to report location and telemetry to Plaspy so vehicles appear in the platform for live tracking, route history, and alerts. The primary goal is to configure the tracker with Plaspy server information, verify transport selection if required, and confirm that reports arrive in the Plaspy service.

- Configure the device to send data to Plaspy using the shared Plaspy endpoint and port.
- Verify transport selection (UDP or TCP) if the tracker requires an explicit choice.
- Use SMS fallback or the manufacturer web or mobile tools when data connectivity is limited.
- Validate the tracker appears in Plaspy and that telemetry such as battery status and alarms is received.
- Save and apply settings and restart the device if the manufacturer procedure requires it.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

These values are the public Plaspy endpoints and port used for all devices on the platform. Configure the LK720-2G to send its reports to d.plaspy.com or 54.85.159.138 on port 8888 and choose UDP or TCP depending on the device configuration interface.

## Typical Requirements Before Setup

- A properly powered and installed LK720-2G device with access to its configuration method
- A compatible 2G GSM SIM card and an active data or SMS plan if required by your deployment
- Access to the manufacturer configuration interface or instructions for SMS based parameter setting
- A Plaspy account or fleet instance where the device will be registered and monitored
- Basic tools to apply settings and, if required, restart the device after applying configuration
- Confirmation of regional 2G network availability and operator compatibility for the SIM

## How This Tracker Connects to Plaspy

The LK720-2G transmits GPS coordinates and device telemetry over the 2G GSM network and is configured to report to the shared Plaspy server endpoint and port. Once correctly pointed to the Plaspy server, Plaspy receives the tracker protocol and begins presenting location, history, and alerts without additional server changes.

- The tracker sends periodic position and telemetry packets to d.plaspy.com or 54.85.159.138 on port 8888
- Plaspy accepts connections over UDP or TCP and automatically detects the tracker protocol
- Telemetry such as battery status, movement alarms, and relay status is forwarded to the Plaspy platform
- Shock alarms and movement alerts are sent to Plaspy to trigger notifications or workflows
- SMS parameter commands can be used as a secondary configuration method when data connectivity is limited

## Common Configuration Workflow

1. Access the official LK-GPS configuration method or vendor software for the LK720-2G (web tool, mobile app, or SMS parameter commands).
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server field according to the manufacturer interface.
3. Set the device port to 8888 as required by Plaspy.
4. Choose UDP or TCP if the device requires explicit transport selection.
5. Save or apply the configuration in the device tool or send the SMS configuration commands if using SMS.
6. Restart the tracker if the manufacturer instructions indicate a reboot is required to apply settings.
7. Validate that the device reports to Plaspy by checking the device list or real time view in your Plaspy account and confirming updates such as location and battery status arrive.

## Example Configuration Commands

The exact commands and syntax for the LK720-2G depend on manufacturer firmware and the configuration method you use. Some installations use SMS parameter commands, others use the vendor web or mobile tools. Because the LK720-2G supports SMS configuration as a fallback, consult the device manual for the precise SMS command format and placeholders.

If you receive manufacturer-provided SMS commands or a command list, apply them in the order shown by the manufacturer and preserve any placeholders such as APN or account values. Example placeholder explanation: if a command includes [apn] or similar, replace that placeholder with your SIM operator APN string.

## Configuration Notes

- Firmware and regional hardware revisions can change command syntax and feature availability; always check the device manual for the firmware version you have.
- Choose TCP or UDP according to the device UI; Plaspy accepts both and will perform automatic protocol detection on incoming connections.
- SMS parameter configuration is a useful fallback when data connectivity is intermittent; confirm your SIM plan supports SMS and data as needed.
- Ensure the SIM card is active on a 2G network where 2G service is required and available.
- Keep manufacturer documentation close during setup to follow any device-specific steps required to apply or persist settings.

## Why Use Plaspy with This Configuration

Configuring the LK720-2G to report to Plaspy provides a practical route to real-time location, route history, and alarm visibility in a single fleet management platform. For owners and fleet managers who need anti-theft features such as the mini relay immobilizer and shock-triggered alarms, integration with Plaspy makes it possible to monitor devices, receive alerts, and take operational actions from the Plaspy dashboard and apps.

Learn more about Plaspy and how it handles device connectivity, monitoring, and reporting at https://www.plaspy.com. Manufacturer specifications, setup methods, and device behavior can change over time, so please verify the latest device-specific configuration details on the LK-GPS website https://www.lk-gps.com.
