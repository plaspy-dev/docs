---
slug: /cantrack/g05n/configuration
id: g05n-configuration
sidebar_label: Configuration
title: CanTrack - G05N Configuration
sidebar_class_name: menu_item_tracker
description: Configure the CanTrack G05N for Plaspy integration with server settings transport options and a practical setup checklist
keywords:
  - CanTrack G05N configuration
  - CanTrack G05N setup
  - G05N Plaspy configuration
  - CanTrack GPS tracker configuration
  - G05N server setup
  - Plaspy tracker configuration
  - vehicle tracker setup
  - fleet tracking G05N
  - G05N installation guide
  - G05N telemetry configuration
---

# CanTrack - G05N Configuration

This page describes the public configuration context for using the CanTrack G05N vehicle tracker with the Plaspy platform. It focuses on the practical, publicly available settings you will need to point a G05N device to Plaspy and validate successful integration. The G05N is a hard wired GPS tracker that reports via GSM GPRS TCP IP and SMS and is commonly used for fleet management anti theft and telematics workflows.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol once the device connects. Manufacturer side setup steps can vary depending on firmware hardware revision installation type and vendor configuration tools so follow the guidance below while also checking the official CanTrack documentation for device specific instructions.

## Configuration Overview

This configuration prepares the G05N to communicate with Plaspy by setting the device reporting endpoint transport and behavior so position and event data arrive in the Plaspy platform. The focus is on supplying the Plaspy server details selecting the transport if required and validating that the device reports after configuration.

- Configure the device to report to the Plaspy server endpoint and port
- Select UDP or TCP transport if the device requires an explicit choice
- Save and apply settings so the G05N begins reporting via GPRS or SMS fallback
- Verify connectivity and incoming messages in Plaspy to confirm protocol detection
- Validate that key events such as ignition alarm SOS and stored points upload correctly

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the CanTrack G05N. These are the public values Plaspy requires.

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Note that all devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol when the device connects.

## Typical Requirements Before Setup

- Device is powered and hard wired according to the installer guide so it has stable vehicle power
- An active GSM SIM with data and SMS capability for GPRS TCP IP reporting and SMS fallback
- Access to the official CanTrack configuration method such as the manufacturer software SMS commands or a configuration tool provided by the vendor
- Basic GNSS visibility during initial testing so the device can acquire position for first reports
- Plaspy account access and a place to validate incoming device data in the platform
- Physical access to any wiring or immobilizer controls if remote functions will be enabled

## How This Tracker Connects to Plaspy

When configured, the G05N sends location and telemetry to the Plaspy server using GPRS TCP IP with SMS as a secondary reporting channel. The device is set to point to the shared Plaspy endpoint and port so the platform can ingest position updates alarms and remote command feedback.

- The tracker is configured to report to d.plaspy.com or 54.85.159.138 on port 8888
- Choose UDP or TCP transport on the device if the configuration requires a transport selection
- Plaspy receives incoming connections on the shared port and automatically detects the device protocol
- Vehicle events such as ignition changes overspeed and SOS will be sent to Plaspy for mapping and alerts
- Stored GPS points buffered during signal loss are uploaded to Plaspy after connectivity is restored

## Common Configuration Workflow

1. Access the official CanTrack configuration method or software provided by the manufacturer or vendor.
2. Locate the server or APN reporting settings area in the configuration tool or SMS command list.
3. Enter the Plaspy server as either the domain d.plaspy.com or the server IP 54.85.159.138.
4. Set the reporting port to 8888 for all device reporting to Plaspy.
5. Choose UDP or TCP transport if the device requires an explicit transport selection.
6. Apply or save the configuration and, if instructed by the manufacturer, restart the device to activate new settings.
7. Validate that the device reports to Plaspy and that the platform shows position and event data for the device.

## Example Configuration Commands

The exact commands and configuration steps vary by manufacturer tool firmware and the method you use to configure the G05N. CanTrack devices are commonly configurable via manufacturer software SMS commands or a USB/serial configuration tool from the vendor. When configuring the transport and endpoint you will enter d.plaspy.com or 54.85.159.138 and set port 8888 and select UDP or TCP as required by the specific tool. Follow the official CanTrack command reference or configuration utility for the precise command syntax for your firmware version.

## Configuration Notes

- Firmware versions and hardware revisions can change command syntax and configuration menus so always confirm commands with the current CanTrack documentation.
- Choose TCP or UDP based on installer guidance and network behavior; both transports are supported by Plaspy but device stability can vary by network.
- The G05N supports SMS reporting as a fallback so validate SMS command access if data reporting fails during testing.
- Stored point buffering on the device will upload automatically when GPRS is reestablished but initial live reporting should be confirmed after configuration.
- Restarting the device may be required to apply settings depending on firmware; perform restarts as part of the validation workflow.

## Why Use Plaspy with This Configuration

Using the CanTrack G05N with Plaspy centralizes real time tracking alerts and remote command capabilities into a single platform for fleet managers service providers and vehicle owners. The combination of GPRS TCP IP primary reporting SMS fallback and local point buffering helps preserve route history and ensures that critical events such as SOS or power cut alarms reach the monitoring platform.

To learn more about Plaspy and how it ingests device data visit https://www.plaspy.com. For the latest device specific commands firmware notes and manufacturer setup guidance verify details on the CanTrack website https://www.cantrackgps.com/ since manufacturer specifications and configuration methods can change over time.
