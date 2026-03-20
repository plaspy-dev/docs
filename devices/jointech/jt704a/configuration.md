---
slug: /jointech/jt704a/configuration
id: jt704a-configuration
sidebar_label: Configuration
title: Jointech - JT704A Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Jointech JT704A integration with Plaspy including server settings and example SMS commands
keywords:
  - Jointech JT704A configuration
  - Jointech JT704A setup
  - JT704A Plaspy configuration
  - JT704A server configuration
  - Jointech tracker setup
  - JT704A GPS tracker configuration
  - container tracker configuration
  - cold chain tracker setup
  - fleet tracking configuration
  - GPS tracker Plaspy integration
---

# Jointech - JT704A Configuration

This page covers the public configuration context for using the Jointech JT704A tracker with Plaspy. It explains the shared server settings that Plaspy requires, describes the practical setup workflow, and presents the publicly available example SMS commands used to point the device at the Plaspy server. Use this guide alongside official Jointech materials for the exact device-side steps.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The JT704A may be configured by SMS for server and APN settings, and this page focuses on the public values and practical steps needed to get the tracker reporting into Plaspy.

## Configuration Overview

Preparing a JT704A for use with Plaspy is primarily about configuring its GPRS server endpoint and APN so the device can send telemetry to Plaspy, validating connectivity, and confirming that the device appears in the platform. When the JT704A is set to report to Plaspy it will send location and environmental telemetry to the common Plaspy endpoint and port.

- Configure the device to point to the Plaspy server endpoint so data is routed to Plaspy.
- Set the correct APN (and optional APN user/password) so the device can establish a GPRS session.
- Choose UDP or TCP transport on the device if required and set the port to Plaspy’s shared port.
- Validate that the tracker reports into Plaspy and that location and sensor telemetry are visible.
- Preserve the device ID when sending SMS configuration commands so the correct unit is updated.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all supported devices)  
- Transport support UDP or TCP on port 8888 (device may be configured to use either)  
- Automatic protocol detection in Plaspy means the platform will detect the tracker protocol once data arrives

## Typical Requirements Before Setup

- A charged and installed JT704A unit with a valid device ID available for use in SMS commands.  
- An active SIM card provisioned for packet data and SMS if you will configure the device over SMS.  
- The correct APN for your mobile network carrier; APN user and password if the operator requires them.  
- Access to Jointech configuration guidance or your installer tool for reference to device-specific steps.  
- A way to receive confirmation that the tracker is online, either via SMS responses or by checking the device list in Plaspy.  
- Basic knowledge of whether your installation requires UDP or TCP transport selection.

## How This Tracker Connects to Plaspy

The JT704A is configured to report its position and sensor data to the shared Plaspy server endpoint and port so that Plaspy can ingest and display the telemetry. Once the tracker successfully establishes a GPRS session and connects to Plaspy, the platform will automatically detect the protocol and begin parsing location, environmental, and event data.

- The device sends periodic or real-time telemetry packets to the Plaspy server d.plaspy.com or IP 54.85.159.138 on port 8888.  
- Transport can use either UDP or TCP depending on device settings and network considerations.  
- Plaspy automatically detects the tracker protocol so the same port and endpoint can be used across devices.  
- Telemetry arriving at Plaspy becomes available for alerts, geofencing, and historical reporting.  
- Sensor readings from the JT704A, such as temperature, humidity, and light levels, are forwarded to Plaspy along with position updates.

## Common Configuration Workflow

1. Access the official Jointech configuration method or software recommended for the JT704A, or prepare to send SMS configuration commands if using SMS.  
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.  
3. Set the port to 8888 as Plaspy uses the same port for all supported devices.  
4. Choose UDP or TCP transport on the device if a transport selection is required.  
5. Configure the APN and, if needed, the APN user and password so the device can establish a GPRS connection.  
6. Apply or save the configuration and restart the device if required by the manufacturer procedure.  
7. Validate that the device reports to Plaspy by checking the device status and telemetry visibility in the platform.

## Example Configuration Commands

To set the JT704A tracker using SMS, send the device-specific SMS commands with the correct device ID. Type the device ID into the command where {{trackerID}} appears. The commands below are presented in the same order as publicly available manufacturer guidance.

1. Set the GPRS server and APN
```text
({{trackerID}},2,S02,129,1,54.85.159.138,8888,[apn])
```
- Replace {{trackerID}} with the device ID printed on your unit or supplied by the manufacturer.  
- Replace [apn] with your carrier APN string.

2. (Optional) Set the APN user and password if your operator requires them
```text
({{trackerID}},2,S24,129,1,[apnu],[apnp])
```
- Replace [apnu] and [apnp] with the APN username and password if applicable.  
- This command is only needed when your SIM carrier requires authentication. If not required, skip this step.

Note: These SMS commands are the publicly available examples for setting the GPRS server and APN. Use the exact format required by your device firmware and confirm any differences with Jointech documentation.

## Configuration Notes

- Firmware and hardware revisions can change the exact SMS command format or parameter order; always confirm with the device manual for your unit.  
- Using UDP or TCP may have different behavior on mobile networks; test both transports if you observe connectivity issues.  
- SMS-based setup is supported as shown in the example commands, but manufacturer tools or provisioning services may provide alternative configuration methods.  
- Keep the device ID correct in each SMS command so the intended tracker receives the configuration.  
- Plaspy’s shared port approach and automatic protocol detection simplify server-side configuration but rely on correct device-side settings to establish connectivity.

## Why Use Plaspy with This Configuration

Integrating the Jointech JT704A with Plaspy provides a straightforward way to collect long-duration location and environmental telemetry for container and cold-chain operations. The JT704A’s low-power design and multi-mode positioning make it suitable for long deployments, while Plaspy centralizes alerts, history, and monitoring so operations teams can respond to location and sensor events efficiently.

To learn more about Plaspy and how it handles device data, visit https://www.plaspy.com. For the latest device-specific configuration details, firmware behavior, and manufacturer instructions, verify current information on the Jointech website https://www.jointcontrols.com/ on the device model pages and support resources.
