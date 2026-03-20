---
slug: /cantrack/g03/configuration
id: g03-configuration
sidebar_label: Configuration
title: CanTrack - G03 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guidance for CanTrack G03 to connect with Plaspy using shared server settings and practical configuration steps
keywords:
  - CanTrack G03 configuration
  - G03 Plaspy setup
  - CanTrack tracker configuration
  - G03 server configuration
  - Plaspy device setup
  - G03 GPS platform setup
  - personal tracker configuration
  - Plaspy tracking integration
  - G03 SOS setup
  - portable asset tracking
---

# CanTrack - G03 Configuration

This page covers the public configuration context for using the CanTrack G03 tracker with Plaspy. It explains the Plaspy server settings you must apply on the device side and outlines the practical steps to prepare the G03 for real-time tracking and history visibility on the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware, hardware revision, installation style, and the vendor tools used for configuration. Use this page as a practical guide for integrating the G03 with Plaspy while confirming any device-specific details from CanTrack documentation.

## Configuration Overview

This configuration process prepares the G03 to send location and event data to Plaspy so the device becomes visible in the platform and mobile apps. The focus is on pointing the tracker at the correct Plaspy server endpoint, choosing the transport if required by the device, and verifying successful reporting.

- Configure the device to report to Plaspy server settings so telemetry and position updates reach the platform.
- Choose the appropriate transport (UDP or TCP) if the device requires a transport selection.
- Validate connectivity and confirm the device appears in Plaspy with live or recent position updates.
- Enable essential events such as SOS and low battery reporting so Plaspy can surface alerts.
- Test restart or save procedures to ensure settings persist after power cycles.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (Plaspy uses the same port for all supported devices)  
- Transport: device may be configured to use UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A charged G03 with accessible configuration interface as provided by CanTrack (SMS commands, configuration app, or web tool depending on the vendor method).
- An active cellular connection and a compatible SIM with data/service enabled if the unit uses the cellular link for reporting.
- Device identifiers such as IMEI or serial number for registration and verification in Plaspy.
- Access to the official CanTrack configuration method or software to change server, transport, and reporting parameters.
- A Plaspy account or onboarding process to match the device to the correct organization or user in the platform.
- A basic test plan to confirm SOS, low battery, and position reporting after configuration.

## How This Tracker Connects to Plaspy

When configured, the G03 sends GNSS positions and telemetry over the cellular link to the Plaspy server endpoint and port specified above. Plaspy receives the incoming data, automatically detects the device protocol, and makes the device visible for real-time monitoring, event alerts, and history playback.

- The tracker reports location and status to the shared Plaspy endpoint d.plaspy.com on port 8888.  
- Transport can be UDP or TCP depending on the device configuration; both are supported by Plaspy.  
- Plaspy automatically detects the device protocol so minimal per-device protocol selection is required on the platform side.  
- Events such as SOS and low battery are forwarded to Plaspy where alerts and rules can be applied.  
- Successful reporting makes the G03 visible on Plaspy maps, dashboards, and history traces for monitoring and review.

## Common Configuration Workflow

1. Access the official CanTrack configuration method or software for the G03 (follow the manufacturer instructions for your firmware and tool).  
2. Enter the Plaspy server address using either the domain d.plaspy.com or the server IP 54.85.159.138.  
3. Set the server port to 8888 (Plaspy uses this same port for all devices).  
4. Choose UDP or TCP if the device requires a transport selection.  
5. Save or apply the configuration in the device tool or command set.  
6. Restart the device if required by the manufacturer to activate the new settings.  
7. Validate that the device reports to Plaspy and appears in your account with position and event updates.

## Example Configuration Commands

The exact commands and configuration interface for the G03 depend on the CanTrack-supplied configuration method and the device firmware. Because manufacturer tools and SMS/command syntax vary by firmware and region, consult CanTrack documentation or the configuration tool provided with your device for the precise command set. If your device uses a graphical configuration utility, the server, IP, port, and transport fields correspond to the Plaspy settings listed on this page.

## Configuration Notes

- Firmware and regional hardware variants can change command syntax and available settings; always verify the device firmware version before applying instructions.  
- If a device offers both UDP and TCP, choose the transport that better matches your network environment; Plaspy accepts both on port 8888.  
- Plaspy uses the same port for every supported device and performs automatic protocol detection, so server address and port are the primary required settings.  
- Keep the device battery charged during configuration and testing to avoid intermittent connectivity during setup.  
- Confirm SOS and low battery events are enabled so the G03 reports those conditions to Plaspy after configuration.

## Why Use Plaspy with This Configuration

Using the CanTrack G03 with Plaspy provides caregivers and managers a straightforward path to real-time visibility, event alerting, and historical route playback for personal safety and portable asset monitoring. The G03’s focus on low power, SOS capability, and reliable positioning combines well with Plaspy’s mapping, alert rules, and history features to create an actionable monitoring solution.

Learn more about Plaspy at https://www.plaspy.com and verify the latest CanTrack device-specific configuration details and firmware guidance at https://www.cantrackgps.com/ since manufacturer setup methods and firmware behavior can change over time.
