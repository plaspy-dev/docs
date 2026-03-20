---
slug: /suntech/st_180_wi_fi/features
id: st_180_wi_fi-features
sidebar_label: Features
title: Suntech - ST 180 Wi-FI Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Suntech ST 180 Wi FI tracker and how it works with Plaspy for vehicle tracking and telematics
keywords:
  - Suntech ST 180 Wi FI features
  - Suntech ST 180 Wi FI GPS tracker
  - ST 180 Wi FI capabilities
  - Suntech vehicle tracker features
  - ST180 Plaspy compatibility
  - Suntech telematics functions
  - ST 180 internal memory positions
  - ST180 CAN bus support
  - fleet tracking Suntech ST 180
  - Suntech Wi FI data download
---

# Suntech - ST 180 Wi-FI Features

This page provides a public feature overview for the Suntech ST 180 Wi-FI tracker and explains how those capabilities are presented and used with Plaspy. It is intended to summarize practical, non-sensitive information about the device and its use in Plaspy for vehicle tracking and telematics visibility.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, and manufacturer implementation. Users and integrators should treat the details on this page as general guidance and consult device documentation for definitive, model specific information.

## Feature Overview

The Suntech ST 180 Wi-FI is a vehicle tracker designed for fleet and telematics applications. It combines onboard data storage, multiple vehicle interface options, and flexible communications to support reporting and analysis workflows in Plaspy.

- Internal memory that stores up to 2000 GPS positions for later retrieval when a Wi FI connection is available
- Ability to connect to vehicle bus systems using J1939 FMS and OBDII standards to collect vehicle system data
- Support for TCP and UDP communications plus Wi FI for uploading recorded data and live reports
- Power saving sleep mode and a backup battery to preserve operation and stored data when main power is unavailable
- Multiple digital inputs and internal event based triggers to record and report custom events

## Core Features of Suntech - ST 180 Wi-FI

- Onboard position storage capacity for up to 2000 GPS points enabling offline logging
- Wi FI download capability to retrieve logged positions without relying on cellular connectivity
- Support for vehicle bus integration using J1939 FMS and OBDII protocols for vehicle data collection
- TCP and UDP communications for sending live data as well as batch uploads
- Configurable sleep mode to reduce power draw when the vehicle is inactive
- Internal event based triggers to capture and store events locally
- Multiple digital inputs for external signal monitoring
- Backup battery to protect data and provide short term power during main supply loss

## How These Features Work with Plaspy

Plaspy can receive and interpret the ST 180 Wi-FI tracker data so fleet managers and operators can visualize location history and vehicle telemetry alongside other assets. Plaspy’s platform is designed to work with a variety of tracker protocols and presents device-originated information in a unified interface.

- Stored GPS positions can be uploaded and displayed in Plaspy when the device connects via Wi FI or network
- Vehicle bus data collected via J1939 FMS and OBDII can be ingested into Plaspy for per vehicle monitoring and historical review
- Digital input events and internal triggers appear as event records inside Plaspy for operational reporting
- Sleep mode and backup battery status influence device online visibility and are reflected in device connection and last seen information
- Plaspy automatically detects common tracker protocols and maps device data into the platform for visualization and alerts

## Typical Use Cases

- Fleet operators retrieving offline trip histories from vehicles after returning to depot Wi FI
- Telematics projects that combine GPS location with CAN bus vehicle diagnostics and performance metrics
- Asset tracking where periodic uploads and local event logging reduce ongoing data costs
- Vehicles that require power saving and backup power during extended downtime or intermittent power situations
- Installations that use digital inputs to record door, ignition, or other discrete events

## Feature Availability Notes

- Feature availability may differ between firmware releases and hardware revisions of the ST 180 Wi FI
- CAN bus support using J1939 FMS and OBDII depends on the vehicle interface and manufacturer implementation
- Wi FI download behavior and networking capabilities may vary by regional device variants and configuration
- Digital inputs and event trigger behavior depend on how the unit is installed and wired in the vehicle
- Always confirm backup battery specifications and expected runtime with the device manufacturer documentation

## Why Use Plaspy with These Features

Using the Suntech ST 180 Wi FI with Plaspy helps consolidate location history and vehicle system data into a single operational view. Plaspy’s detection of common tracker protocols and its tools for visualizing position data, event logs, and vehicle telemetry make it straightforward to convert device data into actionable fleet insights.

Learn more about Plaspy on our main website at https://www.plaspy.com. For the most current device specifications firmware notes and manufacturer details verify the latest information on the Suntech website at http://www.suntechint.com/
